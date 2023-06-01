"use strict";(self.webpackChunkprogrammable_wallets_docs=self.webpackChunkprogrammable_wallets_docs||[]).push([[6138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1},s="Circle Programmable Wallets",i={unversionedId:"quick-start/learn-about-programmable-wallets",id:"quick-start/learn-about-programmable-wallets",title:"Circle Programmable Wallets",description:"Learn how Programmable Wallets make life easier for users and developers, especially those new to the Web3 ecosystem.",source:"@site/docs/quick-start/learn-about-programmable-wallets.md",sourceDirName:"quick-start",slug:"/quick-start/learn-about-programmable-wallets",permalink:"/docs-spike/docs/quick-start/learn-about-programmable-wallets",draft:!1,editUrl:"https://github.com/jheron-circle/docs-spike/docs/quick-start/learn-about-programmable-wallets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programmable Wallets",permalink:"/docs-spike/docs/quick-start/build-a-developer-wallet"},next:{title:"build-a-user-controlled-wallet",permalink:"/docs-spike/docs/quick-start/build-a-user-controlled-wallet"}},o={},c=[{value:"Background",id:"background",level:2},{value:"What is a wallet?",id:"what-is-a-wallet",level:3},{value:"Problems with wallets.",id:"problems-with-wallets",level:3},{value:"Circle\u2019s solution.",id:"circles-solution",level:3},{value:"Understanding Circle Programmable Wallet Primitives",id:"understanding-circle-programmable-wallet-primitives",level:2},{value:"Users",id:"users",level:3},{value:"Wallets",id:"wallets",level:3},{value:"<strong>Wallet Sets</strong>",id:"wallet-sets",level:3},{value:"<strong>Monitored Tokens List</strong>",id:"monitored-tokens-list",level:3},{value:"<strong>Transactions</strong>",id:"transactions",level:3},{value:"Transaction Operation Types",id:"transaction-operation-types",level:4},{value:"Transaction States",id:"transaction-states",level:4},{value:"<strong>Interacting with Decentralized Ecosystems via Smart Contracts and Programmable Wallets</strong>",id:"interacting-with-decentralized-ecosystems-via-smart-contracts-and-programmable-wallets",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"circle-programmable-wallets"},"Circle Programmable Wallets"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Learn how Programmable Wallets make life easier for users and developers, especially those new to the Web3 ecosystem.")),(0,n.kt)("p",null,"Circle Programmable Wallets provide a comprehensive developer solution to storing, sending, receiving, and spending Web3 digital currencies and NFTs. Asset custody can be managed by you or your users. Circle provides a one-stop-shop experience with all the tools and services to handle the complex parts, including security, transaction monitoring, account recovery flows, and more. "),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("h3",{id:"what-is-a-wallet"},"What is a wallet?"),(0,n.kt)("p",null,"Within the crypto world, \u201cwallet\u201d refers to any solution that allows users to store, send, receive, and spend cryptocurrency, be it software (a program or a service) or hardware (a device or physical medium). A wallet doesn\u2019t store actual cryptocurrency coins; rather it stores the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"private keys"))," to access those coins, which exist on public blockchain networks."),(0,n.kt)("h3",{id:"problems-with-wallets"},"Problems with wallets."),(0,n.kt)("p",null,"To date, the broad range of wallet solutions and lack of standardization has created confusion with users. User verification is often difficult, gas (transaction) fees are unappealing, and smart contracts prevent adoption. Wallets are also difficult to integrate for developers unfamiliar with Web3 development and infrastructure. Developers must maintain the security of a user\u2019s private keys while sorting out multiple vendors and offerings, with no single end-to-end solution available to help them build in Web3. "),(0,n.kt)("h3",{id:"circles-solution"},"Circle\u2019s solution."),(0,n.kt)("p",null,"Circle Programmable Wallets are a Wallet-as-a-Service that simplifies creating and managing secure cryptocurrency wallets and their private keys. They extend wallet functionality with custom user flows, separate custody solutions for developers and end-users, and smart contract integration. Developers can interact with Programmable Wallets using RESTful APIs. For user custody wallets, Circle offers mobile-ready SDKs for Android and iOS that ensure users keep full control over their wallets."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Circle Programmable Wallets can be used to send, receive, and store digital assets and non-fungible tokens (NFTs). They are not the same as Circle custody wallets used by Circle Accounts. "),(0,n.kt)("h2",{id:"understanding-circle-programmable-wallet-primitives"},"Understanding Circle Programmable Wallet Primitives"),(0,n.kt)("p",null,"Learn about the primitives (component parts) that provide functionality for Circle\u2019s Programmable Wallets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#heading=h.ej1rs952zoxd"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#heading=h.dfur9a2ir5rh"},"Wallets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#heading=h.shw2rqprg3z1"},"Wallet sets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#heading=h.ga6r5k6lt0iv"},"Monitored Tokens Lists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#heading=h.tvdculn4ulex"},"Transactions"))),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"A User represents the end-user associated with a Circle Programmable Wallet, where the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"custodyType")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"user"),". "),(0,n.kt)("h3",{id:"wallets"},"Wallets"),(0,n.kt)("p",null,"A cryptocurrency wallet is a tool for storing a user\u2019s private keys, which provide access to their tokens and NFTs. A wallet combines an address and its metadata, which are stored together on a blockchain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A wallet has a unique identifier. Circle wallets use ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"v4 UUID"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A wallet has an address on a blockchain. Multiple wallets can share the same address on different EVM blockchains.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A wallet has a custody type (",(0,n.kt)("inlineCode",{parentName:"p"},"custodyType"),") that defines developer or user having the control of invoking the private key of the wallet: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A developer wallet must be created from a wallet set. Multiple wallets can be created from the same wallet set.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A user wallet can be created from API + SDK that\u2019s paired with a wallet set. Additionally for the use case that an app supports an additional blockchain, new user wallets can be created from the existing wallet set of the user."))))),(0,n.kt)("p",null,"For more information about wallets, refer to the article on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/u/0/d/1zwjqkV4RjX2LuYNSApwPD1sVuCvKZsV_-8O0VfPSCII/edit"},"Developer-Controlled Wallets vs. User-Controlled Wallets"),"."),(0,n.kt)("h3",{id:"wallet-sets"},(0,n.kt)("strong",{parentName:"h3"},"Wallet Sets")),(0,n.kt)("p",null,"A Circle wallet set is a set of the wallets created and managed by a unique cryptographic private key. Wallet sets use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp"},"HD wallet setting")," on supported blockchains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A wallet set can contain 1 or many wallets."),(0,n.kt)("li",{parentName:"ul"},"A wallet set can have wallets with addresses on multiple blockchains. On EVM chains a wallet set can have wallets on different chains sharing the same address. "),(0,n.kt)("li",{parentName:"ul"},"A wallet set has a custody type. You can use it to create wallets with either developer- or user-controlled custody, but not both."),(0,n.kt)("li",{parentName:"ul"},"A Developer wallet must be created from a wallet set. This requirement prevents the case of unintentionally creating multiple wallet sets when only you need only one Developer wallet set."),(0,n.kt)("li",{parentName:"ul"},"A User wallet can be created directly from the API + SDK without creating the wallet set first. The newly created user wallet will be paired with a unique wallet set.  "),(0,n.kt)("li",{parentName:"ul"},"At the entity level developers can configure Monitored Tokens List that monitors token balances and deposits into created wallets to trigger callback events.\nFor more information, refer to the guide \u2018Developer-Controlled vs. User-Controlled Wallets\u2019[",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1zwjqkV4RjX2LuYNSApwPD1sVuCvKZsV_-8O0VfPSCII/edit?usp=sharing"},"Circle internal link"),"].")),(0,n.kt)("h3",{id:"monitored-tokens-list"},(0,n.kt)("strong",{parentName:"h3"},"Monitored Tokens List")),(0,n.kt)("p",null,"A list of tokens Circle monitors for token balances and deposits in wallets. Monitored Token Lists create accurate views of your wallets that filter out unrecognizable or spam tokens, which can exist on public blockchains. "),(0,n.kt)("p",null,"You can read and update your Monitored Tokens List with either the Developer Console UI or the Programmable Wallets API. You can add, remove tokens from your Monitored Tokens List, or change the scope of it to monitor all tokens if it better fits your use case. The Monitored Tokens List will affect the GET /wallets/{id}/balances, GET /wallets/{id}/nfts, and GET /transactions API as it\u2019ll only return tokens that are being monitored. You can also register for HTTP callbacks when your wallets receive deposit transactions of monitored tokens. The Monitored Tokens List supports tracking several types of tokens and standards:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ERC-20 tokens"),(0,n.kt)("li",{parentName:"ul"},"ERC-721 and ERC-1155 NFTs")),(0,n.kt)("h3",{id:"transactions"},(0,n.kt)("strong",{parentName:"h3"},"Transactions")),(0,n.kt)("p",null,"A transfer of tokens in a wallet on the blockchain, either inbound or outbound, and the executions or deployment of smart contracts. "),(0,n.kt)("p",null,"A transaction also includes metadata about the states prior to the transaction signing, addition to the mempool, and transaction hash (",(0,n.kt)("inlineCode",{parentName:"p"},"txHash"),") assignment. The transaction may change its associated ",(0,n.kt)("inlineCode",{parentName:"p"},"txHash")," if acceleration and retries are applied. "),(0,n.kt)("h4",{id:"transaction-operation-types"},"Transaction Operation Types"),(0,n.kt)("p",null,"A Transaction contains an Operation field that defines the use case for the transfer. The following table describes the operations, and the relationship between the possible field value and corresponding destination address:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,"Operation Type")),(0,n.kt)("td",null,(0,n.kt)("strong",null,"Operation Field Value")),(0,n.kt)("td",null,(0,n.kt)("strong",null,"Description for Destination Address Field Value"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Transfer"),(0,n.kt)("td",null,"TRANSFER"),(0,n.kt)("td",null,"Externally owned account (EOA) that receives the transfer.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Execute"),(0,n.kt)("td",null,"CONTRACT_EXECUTION"),(0,n.kt)("td",null,"Contract address.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Deploy"),(0,n.kt)("td",null,"CONTRACT_DEPLOYMENT"),(0,n.kt)("td",null,"NULL"))),(0,n.kt)("h4",{id:"transaction-states"},"Transaction States"),(0,n.kt)("p",null,"The state diagram that follows shows the transaction life cycle:"),(0,n.kt)("p",null,"These are the possible states for a transaction:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Initiated"),": The successful request initiates the transaction process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Queued: "),"The transaction is in the processing queue."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sent "),"(Mempool): The EVM signs transactions from the queue, adds them to the mempool, and assigns them a transaction hash. The transaction may be accelerated in this stage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confirmed"),": The EVM confirms the transaction for the first time, as seen on a mined block."),(0,n.kt)("li",{parentName:"ul"},"Terminal States:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Canceled"),": The transaction cancels by request either on-chain or off-chain. All non-terminal states can transition to this state. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Failed"),": The transaction fails. The failure includes an explanation. All non-terminal states can transition to this state. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Completed"),":  The transaction successfully mines and executes on the blockchain, including the last block required for transaction finality.")),(0,n.kt)("h2",{id:"interacting-with-decentralized-ecosystems-via-smart-contracts-and-programmable-wallets"},(0,n.kt)("strong",{parentName:"h2"},"Interacting with Decentralized Ecosystems via Smart Contracts and Programmable Wallets")),(0,n.kt)("p",null,"Smart contracts enable user participation in blockchain-based ecosystems such as DAOs and decentralized exchanges like Uniswap. By leveraging programmable wallet operations, users can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Engage in democratic decision-making and decentralized finance."),(0,n.kt)("li",{parentName:"ul"},"Benefit from transparent, equal frameworks."),(0,n.kt)("li",{parentName:"ul"},"Collaborate with diverse individuals worldwide."),(0,n.kt)("li",{parentName:"ul"},"Interact seamlessly with smart contracts, reshaping traditional structures and services.")))}p.isMDXComponent=!0}}]);