const {atariContract,uniswapRouterContract,uniswapPairContract, uniswapV3RouterContract,uniswapV3PairContract} =require('./contracts');
const {ethers} = require("ethers");

const testnet = `http://18.117.227.242/eth`;
const provider = new ethers.providers.JsonRpcProvider(testnet);
const AtariContract = new ethers.Contract(atariContract.mainnet,atariContract.abi,provider);
const UniswapRouterContract = new ethers.Contract(uniswapRouterContract.mainnet,uniswapRouterContract.abi,provider);
const UniswapPairContract = new ethers.Contract(uniswapPairContract.mainnet,uniswapPairContract.abi,provider);

const UniswapV3RouterContract = new ethers.Contract(uniswapV3RouterContract.mainnet,uniswapV3RouterContract.abi,provider);
const UniswapV3PairContract = {address : uniswapV3PairContract.mainnet};

// Admin Wallet
const adminaccount = {
    publicKey:"0xA00d764ad9EA66Ddce8e3acec795701261514Bd2",
    privateKey:"d48710483f365248d49816a145f7b18ef448279a5e71ac73678156a3e35d11db"
}

const adminWallet = new ethers.Wallet(adminaccount.privateKey, provider);

const SignedAtariContract =AtariContract.connect(adminWallet);
const SignedUniswapRouterContract = UniswapRouterContract.connect(adminWallet);
const SignedUniswapV3RouterContract = UniswapV3RouterContract.connect(adminWallet);


 module.exports = {SignedAtariContract,SignedUniswapRouterContract,SignedUniswapV3RouterContract,UniswapPairContract,UniswapV3PairContract,adminaccount,provider,adminWallet};
