"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,k=f["".concat(p,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={id:"intro",title:"Hokusai API\u3078\u3088\u3046\u3053\u305d\uff01",sidebar_position:1,slug:"/"},p=void 0,c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Hokusai API\u3078\u3088\u3046\u3053\u305d\uff01",description:"Hokusai API\u306fNFT\u3092\u6d3b\u7528\u3067\u304d\u308bAPI\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Hokusai API\u3092\u4f7f\u7528\u3059\u308b\u3068\u8ab0\u3067\u3082\u7c21\u5358\u306bNFT\u306e\u767a\u884c\u30fb\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u306e\u8a2d\u5b9a\u3092\u65e2\u5b58\u306eWEB\u30b5\u30fc\u30d3\u30b9\u306b\u5c0e\u5165\u3059\u308b\u3053\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Hokusai API\u3078\u3088\u3046\u3053\u305d\uff01",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",permalink:"/endpoint"}},s=[{value:"Hokusai API\u306b\u3064\u3044\u3066",id:"hokusai-api\u306b\u3064\u3044\u3066",children:[]},{value:"Hokusai API\u306e\u4e3b\u306a\u5229\u70b9",id:"hokusai-api\u306e\u4e3b\u306a\u5229\u70b9",children:[{value:"\u958b\u767a\u8005\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08",id:"\u958b\u767a\u8005\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08",children:[]},{value:"\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08",id:"\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08",children:[]}]}],l={toc:s};function f(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hokusai API\u306fNFT\u3092\u6d3b\u7528\u3067\u304d\u308bAPI\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Hokusai API\u3092\u4f7f\u7528\u3059\u308b\u3068",(0,o.kt)("strong",{parentName:"p"},"\u8ab0\u3067\u3082\u7c21\u5358\u306b"),"NFT\u306e\u767a\u884c\u30fb\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u306e\u8a2d\u5b9a\u3092\u65e2\u5b58\u306eWEB\u30b5\u30fc\u30d3\u30b9\u306b\u5c0e\u5165\u3059\u308b\u3053\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"hokusai-api\u306b\u3064\u3044\u3066"},"Hokusai API\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,"Hokusai API\u306f\u8ab0\u3067\u3082\u7c21\u5358\u306bNFT\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306aNFT\u5c02\u7528\u306eAPI\u3067\u3059\u3002\n",(0,o.kt)("img",{alt:"intro-image",src:n(6320).Z}),"   "),(0,o.kt)("h2",{id:"hokusai-api\u306e\u4e3b\u306a\u5229\u70b9"},"Hokusai API\u306e\u4e3b\u306a\u5229\u70b9"),(0,o.kt)("h3",{id:"\u958b\u767a\u8005\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08"},"\u958b\u767a\u8005\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08"),(0,o.kt)("h4",{id:"open-api"},"Open API"),(0,o.kt)("p",null,"Hokusai API\u3067\u306f\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u7c21\u5358\u306b\u3084\u308a\u3068\u308a\u304c\u53ef\u80fd\u306aRESTful API\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u77e5\u8b58\u306a\u304f\u3001\u65e2\u5b58\u306eWEB\u30b5\u30fc\u30d3\u30b9\u306b\u5c0e\u5165\u304c\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Hokusai API\u306fREST API\u3067\u3042\u308a\u3001HTTPS\u3067\u901a\u4fe1\u3057\u307e\u3059\u3002HTTPS\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3068\u3001\u7c21\u5358\u306bAPI\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"API\u3092\u547c\u3073\u51fa\u3059\u969b\u306b\u306f\u3001\u6709\u52b9\u306aAPI key\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002API\u3092\u3054\u5229\u7528\u306b\u306a\u308a\u305f\u3044\u65b9\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://hokusai.app/pre-register"},"\u3053\u3061\u3089"),"\u304b\u3089API Key\u306e\u767a\u884c\u7533\u8acb\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h4",{id:"\u67d4\u8edf\u306a\u30b5\u30dd\u30fc\u30c8\u4f53\u5236"},"\u67d4\u8edf\u306a\u30b5\u30dd\u30fc\u30c8\u4f53\u5236"),(0,o.kt)("p",null,"\u307e\u305fHokusai API\u3067\u306fDiscord\u30b5\u30fc\u30d0\u30fc\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002Discord\u30b5\u30fc\u30d0\u30fc\u3067\u306f\u3001Hokusai\u30c1\u30fc\u30e0\u306b\u6c17\u8efd\u306b\u8cea\u554f\u3084\u554f\u3044\u5408\u305b\u306a\u3069\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u53d7\u3051\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/34fmuE25G2"},"\u3053\u3061\u3089"),"\u304b\u3089\u3054\u53c2\u52a0\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h4",{id:"gas\u4ee3\uff08\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u624b\u6570\u6599\uff09\u304c\u7121\u6599"},"GAS\u4ee3\uff08\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u624b\u6570\u6599\uff09\u304c\u7121\u6599"),(0,o.kt)("p",null,"Hokusai API\u306e\u5229\u7528\u8005\u306f\u3001\u3069\u3093\u306a\u30d7\u30e9\u30f3\u3092\u5229\u7528\u3057\u3066\u3044\u3066\u3082NFT\u306e\u767a\u884c\u3068\u9001\u4fe1\u306b\u304b\u304b\u308bGAS\u4ee3\u304c\u5b8c\u5168\u306b\u7121\u6599\u3067\u3059\u3002\n\u6628\u4ecaGAS\u4ee3\u306e\u9ad8\u9a30\u304c\u8a71\u984c\u306b\u306a\u308a\u307e\u3057\u305f\u304cHokusai API\u3067\u306f\u3001GAS\u4ee3\u304c\u4e00\u5207\u304b\u304b\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("h3",{id:"\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08"},"\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u306b\u3084\u3055\u3057\u3044\u8a2d\u8a08"),(0,o.kt)("h4",{id:"nft\u8cfc\u5165\u307e\u3067\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7565\u5316"},"NFT\u8cfc\u5165\u307e\u3067\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7565\u5316"),(0,o.kt)("p",null,"Hokusai API\u3092\u5229\u7528\u3059\u308c\u3070\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u304c\u6697\u53f7\u8cc7\u7523\u3092\u8cfc\u5165\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u3001NFT\u3092\u8cfc\u5165\u3059\u308b\u307e\u3067\u306e\u8907\u96d1\u306a\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7565\u5316\u3059\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002\n\u5229\u7528\u30e6\u30fc\u30b6\u30fc\u306f\u7c21\u5358\u306bNFT\u3078\u306e\u8cfc\u5165\u30fb\u767a\u884c\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"))}f.isMDXComponent=!0},6320:function(e,t,n){t.Z=n.p+"assets/images/intro-image-0d15a4839109b881ad9a1842450ffd68.png"}}]);