"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[1931],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||s;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7896),a=(r(2784),r(30876));const s={},o="setter",i={unversionedId:"step-library/standard-steps/setter",id:"step-library/standard-steps/setter",title:"setter",description:"A ModifierStep for setting given values onto a parent step.",source:"@site/grafast/step-library/standard-steps/setter.md",sourceDirName:"step-library/standard-steps",slug:"/step-library/standard-steps/setter",permalink:"/grafast/step-library/standard-steps/setter",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafast/step-library/standard-steps/setter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reverse",permalink:"/grafast/step-library/standard-steps/reverse"},next:{title:"sideEffect",permalink:"/grafast/step-library/standard-steps/sideEffect"}},p={},l=[],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setter"},"setter"),(0,a.kt)("p",null,"A ModifierStep for setting given values onto a parent step."),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const $update = pgUpdateSingle(...);\nreturn setter($update);\n")),(0,a.kt)("p",null,"TODO: actually document this!"))}f.isMDXComponent=!0}}]);