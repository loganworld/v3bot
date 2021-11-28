const { atariContract, uniswapRouterContract, uniswapPairContract, uniswapV3RouterContract, uniswapV3PairContract, wETH } = require('./contracts');
const { ethers } = require("ethers");

const testnet = `http://18.117.227.242/eth`;
const provider = new ethers.providers.JsonRpcProvider(testnet);
const AtariContract = new ethers.Contract(atariContract.mainnet, atariContract.abi, provider);
const UniswapRouterContract = new ethers.Contract(uniswapRouterContract.mainnet, uniswapRouterContract.abi, provider);
const UniswapPairContract = new ethers.Contract(uniswapPairContract.mainnet, uniswapPairContract.abi, provider);

const UniswapV3RouterContract = new ethers.Contract(uniswapV3RouterContract.mainnet, uniswapV3RouterContract.abi, provider);
const UniswapV3PairContract = { address: uniswapV3PairContract.mainnet };
const wETHContract = new ethers.Contract(wETH.mainnet, wETH.abi, provider);

// Admin Wallet
const adminaccount = {
    publicKey: "",
    privateKey: ""
}

const adminWallet = new ethers.Wallet(adminaccount.privateKey, provider);

const SignedAtariContract = AtariContract.connect(adminWallet);
const SignedUniswapRouterContract = UniswapRouterContract.connect(adminWallet);
const SignedUniswapV3RouterContract = UniswapV3RouterContract.connect(adminWallet);


module.exports = { 
    SignedAtariContract, SignedUniswapRouterContract, SignedUniswapV3RouterContract, 
    UniswapPairContract, UniswapV3PairContract, adminaccount, provider, adminWallet ,
    wETHContract};
