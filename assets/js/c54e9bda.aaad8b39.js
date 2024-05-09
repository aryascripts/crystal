"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[1991],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(2784);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(f,l(l({ref:r},p),{},{components:t})):a.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81403:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7896),n=(t(2784),t(30876));const o={},l="Lambda",s={unversionedId:"servers/lambda",id:"servers/lambda",title:"Lambda",description:"THIS INTEGRATION IS EXPERIMENTAL. PRs improving it are welcome.",source:"@site/grafserv/servers/lambda.md",sourceDirName:"servers",slug:"/servers/lambda",permalink:"/grafserv/servers/lambda",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafserv/servers/lambda.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Koa V2",permalink:"/grafserv/servers/koa"},next:{title:"Next.js API route",permalink:"/grafserv/servers/next"}},i={},c=[{value:"AWS API Gateway v2",id:"aws-api-gateway-v2",level:2}],p={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lambda"},"Lambda"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"THIS INTEGRATION IS EXPERIMENTAL"),". PRs improving it are welcome."),(0,n.kt)("p",null,"Grafserv supports the following AWS lambda configurations:"),(0,n.kt)("h2",{id:"aws-api-gateway-v2"},"AWS API Gateway v2"),(0,n.kt)("p",null,"To deploy Grafserv in API Gateway v2:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create an Node 18.x lambda following the instructions at ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html"},"https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html")),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"grafserv")," as a dependency using your node package manager of choice"),(0,n.kt)("li",{parentName:"ul"},"Replace your lambda's handler implementation with the code below"),(0,n.kt)("li",{parentName:"ul"},"Deploy your lambda as a zip package following the instructions at ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html#nodejs-package-create-dependencies"},"https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html#nodejs-package-create-dependencies"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { grafserv } from "grafserv/lambda/v1";\nimport preset from "./graphile.config.mjs";\nimport schema from "./schema.mjs";\n\n// Create a Grafserv instance\nconst serv = grafserv({ schema, preset });\n\n// Export a lambda handler for GraphQL\nexport const handler = serv.createHandler();\n')))}d.isMDXComponent=!0}}]);