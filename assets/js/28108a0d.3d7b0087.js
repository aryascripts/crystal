"use strict";(self.webpackChunk_localrepo_star_website=self.webpackChunk_localrepo_star_website||[]).push([[9729],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7896),a=(r(2784),r(876));const i={sidebar_position:11,title:"te.run()"},o="te.run(fragment)",l={unversionedId:"api/te-run",id:"api/te-run",title:"te.run()",description:"(alias: eval)",source:"@site/tamedevil/api/te-run.md",sourceDirName:"api",slug:"/api/te-run",permalink:"/tamedevil/api/te-run",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/utils/website/tamedevil/api/te-run.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"te.run()"},sidebar:"tutorialSidebar",previous:{title:"te.tmp()",permalink:"/tamedevil/api/te-tmp"},next:{title:"te.compile()",permalink:"/tamedevil/api/te-compile"}},p={},u=[],c={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terunfragment"},(0,a.kt)("inlineCode",{parentName:"h1"},"te.run(fragment)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(alias: eval)")),(0,a.kt)("p",null,"Evaluates the TE fragment and returns the result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fragment = te`return 1 + 2`;\nconst result = te.run(fragment);\n\nassert.equal(result, 3);\n")))}m.isMDXComponent=!0}}]);