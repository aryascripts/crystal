"use strict";(self.webpackChunk_localrepo_star_website=self.webpackChunk_localrepo_star_website||[]).push([[4745],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(s,".").concat(b)]||u[b]||f[b]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7896),a=(r(2784),r(876));const i={sidebar_position:3,title:"te.lit()"},o="te.lit(val)",l={unversionedId:"api/te-lit",id:"api/te-lit",title:"te.lit()",description:"(alias: te.literal)",source:"@site/tamedevil/api/te-lit.md",sourceDirName:"api",slug:"/api/te-lit",permalink:"/tamedevil/api/te-lit",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/utils/website/tamedevil/api/te-lit.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"te.lit()"},sidebar:"tutorialSidebar",previous:{title:"te.ref()",permalink:"/tamedevil/api/te-ref"},next:{title:"te.substring(()",permalink:"/tamedevil/api/te-substring"}},s={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telitval"},(0,a.kt)("inlineCode",{parentName:"h1"},"te.lit(val)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(alias: te.literal)")),(0,a.kt)("p",null,"As ",(0,a.kt)("inlineCode",{parentName:"p"},"te.ref"),", but in the case of simple primitive values (strings, numbers,\nbooleans, null, undefined) may write them directly to the code rather than\npassing them by reference, which may make the resulting code easier to read."),(0,a.kt)("p",null,"Besides being useful for general purposes, this is the preferred way of safely\nsettings keys on a dynamic object, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// This is a perfectly reasonable key\nconst key1 = "one";\n\n// Note this key would be unsafe to set on an object created via `{}`, but is\n// fine for `Object.create(null)`\nconst key2 = "__proto__";\n\nconst obj = te.run`\\\n  const obj = Object.create(null);\n  obj[${te.lit(key1)}] = 1;\n  obj[${te.lit(key2)}] = { str: true };\n  return obj;\n`;\n\nassert.equal(typeof obj, "object");\nassert.equal(obj.one, 1);\nassert.deepEqual(obj.__proto__, { str: true });\n')))}f.isMDXComponent=!0}}]);