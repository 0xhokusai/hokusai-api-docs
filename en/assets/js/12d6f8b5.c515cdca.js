"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[188],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],i={id:"responses",title:"Response",sidebar_position:2.2,description:"Response for Hokusai API",keywords:["Hokusai api","Response"]},p=void 0,l={unversionedId:"responses",id:"responses",isDocsHomePage:!1,title:"Response",description:"Response for Hokusai API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/response.mdx",sourceDirName:".",slug:"/responses",permalink:"/en/api/responses",version:"current",sidebarPosition:2.2,frontMatter:{id:"responses",title:"Response",sidebar_position:2.2,description:"Response for Hokusai API",keywords:["Hokusai api","Response"]},sidebar:"tutorialSidebar",previous:{title:"Request",permalink:"/en/api/request"},next:{title:"Metadata",permalink:"/en/api/metadata"}},u=[{value:"Response Body",id:"response-body",children:[]},{value:"HTTP Status Code",id:"http-status-code",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Hokusai API returns the result of the request by HTTP status code and response body."),(0,a.kt)("h2",{id:"response-body"},"Response Body"),(0,a.kt)("p",null,"The response body is a JSON object that contains the details of the request result.\nThe content of the response body differs for each endpoint.\nAn example of a response body is shown below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/nfts/{contractId}/mint"',title:'"/nfts/{contractId}/mint"'},'{\n  "txHash": "string"\n}\n')),(0,a.kt)("h2",{id:"http-status-code"},"HTTP Status Code"),(0,a.kt)("p",null,"The Hokusai API returns ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," as the status code for a successful request.\nThe following table shows status codes returned by the Hokusai API."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Status Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"200")),(0,a.kt)("td",{parentName:"tr",align:null},"Success")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"400")),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},"Unauthorized Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"500")),(0,a.kt)("td",{parentName:"tr",align:null},"Internal error")))))}d.isMDXComponent=!0}}]);