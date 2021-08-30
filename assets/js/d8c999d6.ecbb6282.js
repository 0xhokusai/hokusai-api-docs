"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[942],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},829:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],p={id:"endpoint",title:"Endpoint",sidebar_position:2.1,description:"Endpoint for Hokusai API",keywords:["Hokusai api","Endpoint"]},l=void 0,c={unversionedId:"endpoint",id:"endpoint",isDocsHomePage:!1,title:"Endpoint",description:"Endpoint for Hokusai API",source:"@site/docs/endpoint.mdx",sourceDirName:".",slug:"/endpoint",permalink:"/api/endpoint",version:"current",sidebarPosition:2.1,frontMatter:{id:"endpoint",title:"Endpoint",sidebar_position:2.1,description:"Endpoint for Hokusai API",keywords:["Hokusai api","Endpoint"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/api/"},next:{title:"Authentication",permalink:"/api/authentication"}},u=[],d={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The base endpoint is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://hokusai-api-gateway-1mtclftl.an.gateway.dev/\n")),(0,o.kt)("p",null,"The Hokusai API currently provides the following endpoints."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"nft/get"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /v1/nfts/{contractId}/{tokenId}"))),(0,o.kt)("td",{parentName:"tr",align:null},"Get NFT information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"nft/mint"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /v1/nfts/{contractId}/mint"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"glosarry#Mint"},"Mint")," NFT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"royalty/get"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /v1/nfts/{contractId}/{tokenId}/royalty"))),(0,o.kt)("td",{parentName:"tr",align:null},"Get a royalty of specific NFT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"royalty/set"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /v1/nfts/{contractId}/{tokenId}/royalty"))),(0,o.kt)("td",{parentName:"tr",align:null},"Set a royalty of specific NFT")))))}s.isMDXComponent=!0}}]);