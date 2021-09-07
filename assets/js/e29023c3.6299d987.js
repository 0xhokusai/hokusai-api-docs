"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[27],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},175:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={id:"get-started",title:"Get Started",description:"Get started Hokusai API",keywords:["Hokusai api","get started","introduction","\u5165\u9580"]},l="Getting Started with Hokusai API \ud83c\udf0a",p={type:"mdx",permalink:"/get-started",source:"@site/src/pages/get-started.mdx"},u=[{value:"Getting Started",id:"getting-started",children:[{value:"1. Obtain your API key",id:"1-obtain-your-api-key",children:[]},{value:"2. Create your wallet",id:"2-create-your-wallet",children:[]},{value:"3. Publish NFT metadata",id:"3-publish-nft-metadata",children:[]}]},{value:"Using Hokusai API",id:"using-hokusai-api",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-hokusai-api-"},"Getting Started with Hokusai API \ud83c\udf0a"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To get started with Hokusai API, first, clone this repository and follow the below tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"git clone https://github.com/0xhokusai/hokusai-get-started.git\n")),(0,o.kt)("p",null,"The installation requires the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Obtain API key"),(0,o.kt)("li",{parentName:"ul"},"Create your wallet"),(0,o.kt)("li",{parentName:"ul"},"Publish NFT metadata"),(0,o.kt)("li",{parentName:"ul"},"Access NFT metadata")),(0,o.kt)("h3",{id:"1-obtain-your-api-key"},"1. Obtain your API key"),(0,o.kt)("p",null,"Submit your request for an API key ",(0,o.kt)("a",{parentName:"p",href:"https://hokusai.app/pre-register"},"here"),". You will receive the key, which contains ",(0,o.kt)("inlineCode",{parentName:"p"},"HOKUSAI_API_KEY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HOKUSAI_CONTRACT_ID"),". Currently, it takes 2-3 business days to issue the API Key. "),(0,o.kt)("h3",{id:"2-create-your-wallet"},"2. Create your wallet"),(0,o.kt)("p",null,"To mint an NFT, you must have your wallet address. We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.metamask.io"},"Metamask")," for wallet software."),(0,o.kt)("p",null,"Metamask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.\nThese articles provide a great introduction on how to set up Metamask."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.matic.network/docs/develop/metamask/hello/"},"How to create Metamask Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask"},"Configure Polygon on Metamask"))),(0,o.kt)("h3",{id:"3-publish-nft-metadata"},"3. Publish NFT metadata"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nftschool.dev/reference/metadata-schemas/#intro-to-json-schemas"},"Metadata")," is data that provides information about other data. NFT metadata contains information about its name, description, and image.\nWe use ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/"},"nft.storage")," to publish NFT metadata. "),(0,o.kt)("h4",{id:"31-setup-nftstorage"},"3.1 Setup nft.storage"),(0,o.kt)("p",null,"Follow the setup guideline for nft.storage ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/#getting-started"},"here"),"."),(0,o.kt)("h4",{id:"32-add-your-api-keys"},"3.2 Add your API keys"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.sample")," file and fill in your own API keys in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"cp .env.sample .env # and rewrite API Keys\n")),(0,o.kt)("h4",{id:"33-install-required-packages-via-yarn"},"3.3 Install required packages via yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"yarn # install the required packages\n")),(0,o.kt)("p",null,"In case you have not installed yarn, follow the setup ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable"},"here"),"."),(0,o.kt)("h4",{id:"34-publish-metadata"},"3.4 Publish metadata"),(0,o.kt)("p",null,"You can publish metadata using our sample image (hokusai.png) by running the following codes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"yarn store-metadata \n")),(0,o.kt)("p",null,"You will get a URL for the metadata like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTPS URL for the metadata: https://dweb.link/ipfs/bafyreieaaqfof34kfqyvwe4arta6jsuwuauim4d24qo22ct2xnvjnlnrb4//metadata.json # example metadata URL\n")),(0,o.kt)("h4",{id:"34-access-metadata"},"3.4 Access metadata"),(0,o.kt)("p",null,"You can access the metadata uploaded on IPFS via HTTPS URL by running the code below.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/"},"IPFS")," is a distributed system for storing and accessing files, websites, applications, and data.\nLearn more about IPFS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},'curl https://dweb.link/ipfs/bafyreieaaqfof34kfqyvwe4arta6jsuwuauim4d24qo22ct2xnvjnlnrb4/metadata.json # example metadata url\n\n{\n    "name":"nft.storage store test",\n    "description":"Using the nft.storage metadata API to create ERC-1155 compatible metadata.",\n    "image":"ipfs://bafybeicsu73gednfaa5svozuoac4ebpi76nn4auhygcvkvbn4kk2vdv5ey/hokusai.png"\n}\n')),(0,o.kt)("h2",{id:"using-hokusai-api"},"Using Hokusai API"),(0,o.kt)("p",null,"Congratulations! You're ready to use Hokusai API. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hokusai.app/"},"Hokusai API Document")," for the full documentation. Now, let's try minting and getting an NFT. "),(0,o.kt)("h4",{id:"mint-an-nft"},"Mint an NFT"),(0,o.kt)("p",null,"To ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hokusai.app/api/glosarry/#mint"},"mint")," an NFT, run the code below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"yarn mint-nft {to} {tokenUri}\n{\n  txHash: '0x8765feaa11a7e0f9f4a84f21415434d80dd9be27728a8f6eff4d402e4d0c2766' # example Transaction Hash\n}\n")),(0,o.kt)("p",null,"You may refer to our documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hokusai.app/api/nft/mint"},"here")," for parameter descriptions."),(0,o.kt)("h4",{id:"get-an-nft"},"Get an NFT"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tokenId")," issued by Hokusai API can be viewed via ",(0,o.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com"},"polygonscan"),". You can search by txHash received from minting. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-:bash"},"yarn get-nft {tokenId}\n{ id: {tokenId}, tokenUri: 'https://example.com/1' } # example response\n")),(0,o.kt)("p",null,"So far, you have minted an NFT and got NFT info via Hokusai API. See what else you can do with our API on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hokusai.app/"},"Hokusai API Document")," \ud83e\udd73"))}d.isMDXComponent=!0}}]);