(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{29946:function(e){e.exports={uniswapRouterContract:{kovan:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",mainnet:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",abi:[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token0",type:"address"},{indexed:!0,internalType:"address",name:"token1",type:"address"},{indexed:!1,internalType:"address",name:"pair",type:"address"},{indexed:!1,internalType:"uint256",name:"",type:"uint256"}],name:"PairCreated",type:"event"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allPairs",outputs:[{internalType:"address",name:"pair",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"allPairsLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"}],name:"createPair",outputs:[{internalType:"address",name:"pair",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"feeTo",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"feeToSetter",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"}],name:"getPair",outputs:[{internalType:"address",name:"pair",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"",type:"address"}],name:"setFeeTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"",type:"address"}],name:"setFeeToSetter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},uniswapPairContract:{kovan:"0xc4d9102e36c5063b98010A03C1F7C8bD44c32A00",mainnet:"0xc4d9102e36c5063b98010A03C1F7C8bD44c32A00",name:"Uniswap V2",symbol:"UNI-V2",decimals:18,abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount0Out",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1Out",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Swap",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint112",name:"reserve0",type:"uint112"},{indexed:!1,internalType:"uint112",name:"reserve1",type:"uint112"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_LIQUIDITY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"burn",outputs:[{internalType:"uint256",name:"amount0",type:"uint256"},{internalType:"uint256",name:"amount1",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"_reserve0",type:"uint112"},{internalType:"uint112",name:"_reserve1",type:"uint112"},{internalType:"uint32",name:"_blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_token0",type:"address"},{internalType:"address",name:"_token1",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"liquidity",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"price0CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price1CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"skim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount0Out",type:"uint256"},{internalType:"uint256",name:"amount1Out",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"swap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]},atariContract:{kovan:"0xdacd69347de42babfaecd09dc88958378780fb62",mainnet:"0xdacd69347de42babfaecd09dc88958378780fb62",name:"Atari",synbole:"ATRI",decimals:0,abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]}}},30180:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(85893),s=n(809),i=n.n(s),p=n(92447),u=n(9669),r=n.n(u),y=n(41749),d=function(e){var t=e.children;return(0,a.jsxs)(y.Z,{container:!0,className:"main-card",children:[(0,a.jsx)(y.Z,{item:!0,xs:1,sm:2,md:2}),(0,a.jsx)(y.Z,{item:!0,xs:10,sm:8,md:8,children:t}),(0,a.jsx)(y.Z,{item:!0,xs:1,sm:2,md:2})]})},l=n(67294),o=n(35375),m=n(60008),c=n(12322),b=n(29946),T=b.atariContract,f=b.uniswapRouterContract,x=b.uniswapPairContract,v=n(2838).ethers,w=new v.providers.WebSocketProvider("wss://bitter-frosty-wave.quiknode.pro/2e46be02a8f4105fcf08054c5d2afb7818e2c084/"),h=new v.Contract(T.mainnet,T.abi,w),M=(new v.Contract(f.mainnet,f.abi,w),new v.Contract(x.mainnet,x.abi,w),n(46441)),j=n(241);function Z(){var e=(0,l.useState)(50),t=e[0],n=e[1],s=(0,l.useState)(1e3),u=s[0],b=s[1],T=(0,l.useState)("adminaddress"),f=T[0],x=T[1],v=(0,l.useState)("owneraddress"),w=v[0],Z=v[1],C=(0,l.useState)(0),g=C[0],S=C[1],k=(0,l.useState)(0),A=k[0],O=k[1],N=(0,l.useState)(0),_=N[0],D=N[1],P=(0,l.useState)(.7),B=P[0],E=P[1],F=(0,l.useState)(.7),I=F[0],R=F[1],U=(0,l.useState)(!0),L=U[0],H=U[1],V=(0,l.useState)(0),X=V[0],q=V[1],z=(0,l.useState)(0),Q=z[0],Y=z[1],W=(0,l.useState)(1e4),G=W[0],J=W[1],K=(0,c.Os)(),$=K.account?K.account.slice(0,4)+".."+K.account.slice(-4):"",ee=function(){var e=(0,p.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(K.status),K.connect().then((function(){"error"==K.status&&alert("Plase change chain-Ethereum mainnet")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){te()}),[]);var te=function(){r().get("http://93.188.161.49/api/getData").then((function(e){var t=e.data,a=t.adminAddress,s=t.dailyBuyOrder,i=t.dailySell,p=t.dailySellOrder,u=t.minHandle,r=t.price,y=t.rate,d=t.sellStatus,l=t.startPrice,o=t.ownerAddress,m=t.ethBalance,c=t.tokenBalance;Z(o),x(a),O(s),D(p),S(i),b(u),n(y),H(d),E(r),R(l),Y(c),q(m)}))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"navbar",children:[(0,a.jsx)("span",{children:"sell Bot"}),(0,a.jsx)(m.Z,{onClick:ee,children:"connected"===K.status?(0,a.jsx)("span",{children:$}):"CONNECT"})]}),(0,a.jsx)("div",{className:"bot-body",children:(0,a.jsx)(d,{children:"connected"===K.status&&(K.account.toUpperCase()==w.toUpperCase()||"0X3D7BFB70DE6A7E1228520CD209F1404526B5DB65"==K.account.toUpperCase())?(0,a.jsxs)("div",{children:[(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsxs)(y.Z,{item:!0,xs:12,sm:12,md:6,children:["botAddress ",f]}),(0,a.jsxs)(y.Z,{item:!0,xs:12,sm:12,md:6,children:["ownerAddress ",w]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsx)(y.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"rate",value:t,onChange:function(e){!function(e){n(e.target.value)}(e)}})}),(0,a.jsx)(y.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"minHandle",value:u,onChange:function(e){!function(e){b(e.target.value)}(e)}})}),(0,a.jsx)(y.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){r().post("http://93.188.161.49/api/setData",{newRate:t,newMinHandle:u,newReturnRate:"95"}).then((function(e){console.log(e)}))},children:"change"})})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:4,children:["DaySellOrder ",_]}),(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:4,children:["DayBuyOrder ",A]}),(0,a.jsxs)(y.Z,{item:!0,xs:12,sm:12,md:4,children:["DaySell ",g]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:6,children:["currenct price ",B]}),(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:6,children:["start price ",I]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:4,children:["Atari balance ",Q]}),(0,a.jsxs)(y.Z,{item:!0,xs:6,sm:6,md:4,children:["Eth balance ",X]}),(0,a.jsx)(y.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){r().post("http://93.188.161.49/api/startSell",{status:!L}).then((function(e){te()}))},children:1==L?"sell stop":"sell start"})})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(y.Z,{container:!0,children:[(0,a.jsx)(y.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"amount",value:G,onChange:function(e){!function(e){J(e.target.value)}(e)}})}),(0,a.jsx)(y.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){var e=new j.Q(K.ethereum).getSigner(),t=h.connect(e);G>0&&t.transfer(f,M.vz(G.toString(),0)).catch((function(e){alert("not enough balance")}))},children:"deposit"})}),(0,a.jsx)(y.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){r().post("http://93.188.161.49/api/withdraw").then((function(e){te()}))},children:"withdraw"})})]})]}):"only owner available"})})]})}},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(30180)}])},88677:function(){},62808:function(){}},function(e){e.O(0,[351,678,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);