const express = require("express");
const http = require("http");
const passport = require("passport");
const cors = require('cors');
const bodyParser = require("body-parser");
const {
    SignedAtariContract,
    SignedUniswapRouterContract,
    UniswapPairContract,
    provider,
    adminaccount,
    adminWallet,
    SignedUniswapV3RouterContract,
    UniswapV3PairContract
} = require('./contracts');

const ethers = require('ethers');
const port = process.env.PORT || 5000;

const cron = require('node-cron');
const app = express();
const router = require('express').Router();

app.use(cors());

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// our server instance
const server = http.createServer(app);
const ownerAddress = "0xc7bB26962134F4cA169FDEeF9f41bb63f8ff0b83";

var rate = 70;
var returnRate = 90;
var minHandle = 800;
var sellStatus = true;

var dailySell = 0;
var dailySellOrder = 0;
var dailyBuyOrder = 0;
var dailyTotalOrder = 0;
var startPrice = 0.07;
var price =0.07;

var tokenBalance = 0;
var ethBalance = 0;


const handleswap = async ()=>{
  var latestblocknumber;

  const handletransactions = async ()=>{
    let blockNumber = await provider.getBlockNumber();
    console.log("ETH",blockNumber)
    if(blockNumber>latestblocknumber){ 
      var txhistory =SignedAtariContract.queryFilter("Transfer",latestblocknumber+1,blockNumber);
      
      updatePrice();
      let nonce = await provider.getTransactionCount(adminWallet.address);
      txhistory.then((res)=>{
        res.map((tx,index)=>{
          console.log(tx.args);
          let from = tx.args.from;
          let amount = tx.args[2];
          let to = tx.args.to;
          dailyTotalOrder += Number(amount.toString());
          //sell
        //   if(from.toUpperCase()==(UniswapPairContract.address).toUpperCase())
        //     {
        //         dailyBuyOrder += Number(amount.toString());

        //         var sellAmount = Number(amount.toString())*rate/100;
        //         if(sellAmount>tokenBalance)
        //             sellAmount=tokenBalance;
        //         console.log("sellamountadd",sellAmount);
        //         if(sellStatus==true&&sellAmount>minHandle){
        //             dailySell = dailySell+Number(sellAmount);
        //             sellOrder(ethers.utils.parseUnits(Number(sellAmount).toFixed(0).toString(),0),nonce++);
        //         }
        //     }
            if(from.toUpperCase()==(UniswapV3PairContract.address).toUpperCase()){
                dailyBuyOrder += Number(amount.toString());

                var sellAmount = Number(amount.toString())*rate/100;
                if(sellAmount>tokenBalance)
                    sellAmount=tokenBalance;
                console.log("sellamountadd",sellAmount);
                if(sellStatus==true&&sellAmount>minHandle){
                    dailySell = dailySell+Number(sellAmount);
                    sellOrder_1(ethers.utils.parseUnits(Number(sellAmount).toFixed(0).toString(),0),nonce++);
                }
          }
          //buy
          else if(to.toUpperCase() == (UniswapPairContract.address).toUpperCase()){
            dailySellOrder += Number(amount.toString());
          }
        })
      })       
      latestblocknumber = blockNumber;
    }
  }

  let blockNumber = await provider.getBlockNumber().catch((err)=>{
    console.log("Eth blockNumber err : ",err)
  });
  latestblocknumber = blockNumber;
  cron.schedule('*/15 * * * * *', () => {
    console.log("running a ethHandle every 3 second");
    handletransactions()
  });
}


const sellOrder = async (amount,n)=>{
  
  let nonce = n;
  var path=[];
  path[0] = SignedAtariContract.address;
  path[1] = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  var date= new Date();
  var seconds = Math.floor(date.getTime() / 1000)+1000000;

  var approvedAmount = await SignedAtariContract.allowance(adminaccount.publicKey,SignedUniswapRouterContract.address);
  if(Number(approvedAmount.toString())<amount)
  {
    var tx =await SignedAtariContract.approve(SignedUniswapRouterContract.address,amount*100);
    await tx.wait();
    nonce++;
  }
  
  tx = await SignedUniswapRouterContract.swapExactTokensForETH(amount,0,path,adminaccount.publicKey,seconds,{nonce:nonce,gasLimit:160000})
  if(tx!=null)
    console.log(await tx.wait())
}

const sellOrder_1 = async (amount,n)=>{
  
    let nonce = n;
    var path=[];
    path[0] = SignedAtariContract.address;
    path[1] = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    var date= new Date();
    var seconds = Math.floor(date.getTime() / 1000)+1000000;
  
    var approvedAmount = await SignedAtariContract.allowance(adminaccount.publicKey,SignedUniswapV3RouterContract.address);
    if(Number(approvedAmount.toString())<amount)
    {
      var tx =await SignedAtariContract.approve(SignedUniswapV3RouterContract.address,amount*100);
      await tx.wait();
      nonce++;
    }
    
    const params = {
        tokenIn: path[0],
        tokenOut: path[1],
        fee: 3000,
        recipient : adminWallet.account,
        deadline : seconds,
        amountIn : amount,
        amountOutMinimum : "0",
        sqrtPriceLimitX96: 0,
    }

    tx = await SignedUniswapV3RouterContract.exactInputSingle(params,{nonce:nonce,gasLimit:250000})
    if(tx!=null)
      console.log(await tx.wait())
  }

const updatePrice =async () => {
  var reversed =await UniswapPairContract.getReserves();
  price =ethers.utils.formatUnits(reversed[0])/ethers.utils.formatUnits(reversed[1],0);
  console.log(price);
  var balance =await adminWallet.getBalance();
  ethBalance =ethers.utils.formatUnits(balance)*returnRate/100;
  console.log(ethBalance);
  var atariBalance = await SignedAtariContract.balanceOf(adminaccount.publicKey);
  tokenBalance = atariBalance.toString();
  console.log(tokenBalance);
}


//daily update
const initDailyDatas =async ()=>{
  dailySell = 0;
  dailySellOrder = 0;
  dailyBuyOrder = 0;
  await updatePrice();
  startPrice = price;

}


initDailyDatas();
handleswap();

//apis
const getData = (req,res)=>{
  res.json({
    rate:rate,
    minHandle:minHandle,
    dailySell:dailySell,
    sellStatus:sellStatus,
    dailySellOrder:dailySellOrder,
    dailyBuyOrder:dailyBuyOrder,
    startPrice:startPrice,
    price:price,
    adminAddress:adminaccount.publicKey,
    ownerAddress:ownerAddress,
    tokenBalance:tokenBalance,
    ethBalance:ethBalance,
    dailyTotalOrder:dailyTotalOrder,
  })
}

const setData = (req,res)=>{
  const {newRate,newMinHandle,newReturnRate} = req.body;
  console.log(newRate,newMinHandle,newReturnRate);
    rate = newRate
    minHandle = newMinHandle;
    returnRate = newReturnRate;

  res.json({
    sellStatus:sellStatus
  })
}

const startSell = (req,res)=>{
  var status= req.body.status;
  sellStatus = status
  res.json({
    sellStatus:sellStatus
  })
}

const withdraw =async (req,res) => {
  var balance =await adminWallet.getBalance();
  var returnBalance =ethers.utils.formatUnits(balance)*returnRate/100;
  console.log("returnBalance",returnBalance,dailyTotalOrder);
  if(returnBalance>0.1)
    adminWallet.sendTransaction({to:ownerAddress,value:ethers.utils.parseEther(returnBalance.toString())});
  
  if(res!=null)
    res.json({
      balance:returnBalance,
      sellStatus:sellStatus
    })
}


router.get('/getData',getData);
router.post('/setData',setData);
router.post('/startSell',startSell);
router.post('/withdraw',withdraw);

app.use(express.static(__dirname+"/out"));
app.get('/',function(req, res)
        {
            res.sendFile(__dirname + '/index.html');
        });
  
app.use("/api",router);
server.listen(port, () => console.log(`Listening on port ${port}`));
