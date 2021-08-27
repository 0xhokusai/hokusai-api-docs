"use strict";(self.webpackChunkhokusa_api_docs=self.webpackChunkhokusa_api_docs||[]).push([[374],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(2713);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,p=39;var s=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,s=e.values,d=e.groupId,m=e.className,f=l(),k=f.tabGroupChoices,y=f.setTabGroupChoices,g=(0,r.useState)(a),b=g[0],v=g[1],N=r.Children.toArray(e.children),h=[];if(null!=d){var O=k[d];null!=O&&O!==b&&s.some((function(e){return e.value===O}))&&v(O)}var C=function(e){var t=e.currentTarget,n=h.indexOf(t),r=s[n].value;v(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,l,i,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case u:var a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:T,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),i=n(7358),o=n(8448),c=["components"],u={title:"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",sidebar_position:2},p="\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",s={unversionedId:"royalty/set",id:"royalty/set",isDocsHomePage:!1,title:"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",description:"POST /v1/nfts//{tokenId}/royalty",source:"@site/docs/royalty/set.mdx",sourceDirName:"royalty",slug:"/royalty/set",permalink:"/api/royalty/set",version:"current",sidebarPosition:2,frontMatter:{title:"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",permalink:"/api/royalty/get"},next:{title:"\u7528\u8a9e\u96c6",permalink:"/api/glosarry"}},d=[{value:"<code>POST /v1/nfts/{contractId}/{tokenId}/royalty</code>",id:"post-v1nftscontractidtokenidroyalty",children:[]},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf",children:[]},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3",children:[]},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",children:[]},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b"},"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b"),(0,l.kt)("h3",{id:"post-v1nftscontractidtokenidroyalty"},(0,l.kt)("inlineCode",{parentName:"h3"},"POST /v1/nfts/{contractId}/{tokenId}/royalty")),(0,l.kt)("p",null,"NFT \u306e\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u60c5\u5831\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5024\u306e\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contractId")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"ADXS6zyen4NctAjH")),(0,l.kt)("td",{parentName:"tr",align:null},"Hokusai API \u304b\u3089\u767a\u884c\u3055\u308c\u305f",(0,l.kt)("inlineCode",{parentName:"td"},"contractId")),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Hokusai API \u306b\u3088\u308a NFT \u3092 mint \u3057\u305f\u969b\u306b\u767a\u884c\u3055\u308c\u305f",(0,l.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,l.kt)("td",{parentName:"tr",align:null},"Required")))),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ad\u30fc"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5024\u306e\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receiver")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"0x3a93da588954acf4d0d8f1f1a4439fa79d84cf29")),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u53d7\u4fe1\u8005\u306eEthereum\u30a2\u30c9\u30ec\u30b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"percentage")),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ed\u30a4\u30e4\u30ea\u30c6\u30a3\u306e\u5272\u5408\uff080~100%)\u3002\u5c0f\u6570\u7b2c\u4e8c\u4f4d\u4ee5\u4e0b\u306f\u56db\u6368\u4e94\u5165\u3055\u308c\u307e\u3059\u3002")))),(0,l.kt)("h3",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ad\u30fc"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5024\u306e\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"txHash")),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"0xc968510337593d167efa433ab3726634cab8754d88f38e6e61e8ac7071601c42")),(0,l.kt)("td",{parentName:"tr",align:null},"NFT \u3092\u767a\u884c\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30cf\u30c3\u30b7\u30e5\u5024")))),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,l.kt)(i.Z,{defaultValue:"curl",groupId:"programming-language",values:[{label:"Curl",value:"curl"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" \\ \n"https://api.hokusai.app/v1/nfts/ADXS6zyen4NctAjH/1/royalty?key=fKe2rDFUZjSSdXfW" \\\n-d \'{"receiver":"0x3a93da588954acf4d0d8f1f1a4439fa79d84cf29", "percentage": 10}\'\n'))),(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const baseUrl = \"https://api.hokusai.app\"\n\nconst mintNft = async (baseUrl, apiKey, contractId, tokenId, receiver, percentage) => {\n  const path = `/v1/nfts/${contractId}/${tokenId}/royalty`\n  const url = new URL(baseUrl + path);\n\n  const params = {\n    key: apiKey\n  };\n\n  const requestBody = {\n    receiver,\n    percentage\n  };\n\n  url.search = new URLSearchParams(params).toString();\n\n  const res = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(requestBody)\n  });\n  return res.json();\n}\n"))),(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nbase_url = "https://api.hokusai.app"\n\ndef set_royalty(base_url: str, api_key: str, contract_id: str, token_id: str, receiver: str, percentage: float):\n  path = f"/v1/nfts/{contract_id}/{token_id}/royalty"\n\n  params = {\n    "key": api_key\n  }\n\n  request_body = {\n    "receiver": receiver,\n    "percentage": percentage,\n  }\n\n  res = requests.post(base_url + path, params=params, json=request_body)\n  return res.json()\n')))),(0,l.kt)("h4",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9-1"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txHash": "0xc968510337593d167efa433ab3726634cab8754d88f38e6e61e8ac7071601c42"\n}\n')))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);