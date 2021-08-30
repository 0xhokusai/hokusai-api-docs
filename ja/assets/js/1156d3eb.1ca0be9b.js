"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[931],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(2713);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,p=39;var s=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,s=e.values,d=e.groupId,m=e.className,f=i(),k=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,r.useState)(a),N=v[0],b=v[1],h=r.Children.toArray(e.children),y=[];if(null!=d){var T=k[d];null!=T&&T!==N&&s.some((function(e){return e.value===T}))&&b(T)}var j=function(e){var t=e.currentTarget,n=y.indexOf(t),r=s[n].value;b(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case p:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case u:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:j,onClick:j},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4952:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),l=n(7358),o=n(8448),c=["components"],u={title:"NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",sidebar_position:1},p="NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",s={unversionedId:"nft/get",id:"nft/get",isDocsHomePage:!1,title:"NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",description:"GET /v1/nfts//{tokenId}",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nft/get.mdx",sourceDirName:"nft",slug:"/nft/get",permalink:"/ja/api/nft/get",version:"current",sidebarPosition:1,frontMatter:{title:"NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u30e1\u30bf\u30c7\u30fc\u30bf",permalink:"/ja/api/metadata"},next:{title:"NFT\u3092\u767a\u884c\u3059\u308b",permalink:"/ja/api/nft/mint"}},d=[{value:"<code>GET /v1/nfts/{contractId}/{tokenId}</code>",id:"get-v1nftscontractidtokenid",children:[]},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf",children:[]},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",children:[]},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nft\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"},"NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"),(0,i.kt)("h3",{id:"get-v1nftscontractidtokenid"},(0,i.kt)("inlineCode",{parentName:"h3"},"GET /v1/nfts/{contractId}/{tokenId}")),(0,i.kt)("p",null,"NFT\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5024\u306e\u4f8b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contractId")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ADXS6zyen4NctAjH")),(0,i.kt)("td",{parentName:"tr",align:null},"Hokusai API \u304b\u3089\u767a\u884c\u3055\u308c\u305f",(0,i.kt)("inlineCode",{parentName:"td"},"contractId")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},"Hokusai API \u306b\u3088\u308a NFT \u3092 mint \u3057\u305f\u969b\u306b\u767a\u884c\u3055\u308c\u305f",(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h3",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30ad\u30fc"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5024\u306e\u4f8b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},"\u767a\u884c\u3057\u305f NFT \u306b\u4e00\u610f\u306b\u7d10\u3065\u304f",(0,i.kt)("inlineCode",{parentName:"td"},"id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenUri")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"https://example.com/1")),(0,i.kt)("td",{parentName:"tr",align:null},"\u30e1\u30bf\u30c7\u30fc\u30bf\u306eURI")))),(0,i.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,i.kt)(l.Z,{defaultValue:"curl",groupId:"programming-language",values:[{label:"Curl",value:"curl"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.hokusai.app/v1/nfts/ADXS6zyen4NctAjH/1?key=fKe2rDFUZjSSdXfW"\n'))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const baseUrl = "https://api.hokusai.app"\n\nconst getNft = async (baseUrl, apiKey, contractId, tokenId) => {\n  const path = `/v1/nfts/${contractId}/${tokenId}`\n  const url = new URL(baseUrl + path);\n\n  const params = {\n    key: apiKey\n  };\n\n  url.search = new URLSearchParams(params).toString();\n\n  const res = await fetch(url);\n  return res.json();\n}\n'))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nbase_url = "https://api.hokusai.app"\n\ndef get_nft(base_url: str, api_key: str, contract_id: str, token_id: str):\n  path = f"/v1/nfts/{contract_id}/{token_id}"\n\n  params = {\n    "key": api_key\n  }\n\n  res = requests.get(base_url + path, params=params)\n  return res.json()\n')))),(0,i.kt)("h4",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9-1"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "tokenUri": "https://example.com/1"\n}\n')))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);