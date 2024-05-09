"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[4622],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||g[c]||p;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var a=n(7896),r=(n(2784),n(30876));const p={},i="pgUpdateSingle",l={unversionedId:"step-library/dataplan-pg/pgUpdateSingle",id:"step-library/dataplan-pg/pgUpdateSingle",title:"pgUpdateSingle",description:"Updates a single row within the given resource identified by the given spec and setting the given attributes (if any).",source:"@site/grafast/step-library/dataplan-pg/pgUpdateSingle.md",sourceDirName:"step-library/dataplan-pg",slug:"/step-library/dataplan-pg/pgUpdateSingle",permalink:"/grafast/step-library/dataplan-pg/pgUpdateSingle",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafast/step-library/dataplan-pg/pgUpdateSingle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pgUnionAll",permalink:"/grafast/step-library/dataplan-pg/pgUnionAll"},next:{title:"Polymorphism",permalink:"/grafast/step-library/dataplan-pg/polymorphism"}},s={},o=[{value:"$pgUpdateSingle.set(attr, $value)",id:"pgupdatesinglesetattr-value",level:2},{value:"$pgUpdateSingle.setPlan()",id:"pgupdatesinglesetplan",level:2},{value:"$pgUpdateSingle.get(attr)",id:"pgupdatesinglegetattr",level:2},{value:"$pgUpdateSingle.record()",id:"pgupdatesinglerecord",level:2}],d={toc:o},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pgupdatesingle"},"pgUpdateSingle"),(0,r.kt)("p",null,"Updates a single row within the given ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," identified by the given spec and setting the given attributes (if any)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const $updatedUser = pgUpdateSingle(\n  usersResource,\n\n  // Find record by:\n  { id: $id },\n\n  // Update these attributes:\n  { username: $username },\n);\n")),(0,r.kt)("h2",{id:"pgupdatesinglesetattr-value"},"$pgUpdateSingle.set(attr, $value)"),(0,r.kt)("p",null,"Adds another attribute to be updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const $updatedUser = pgUpdateSingle(usersResource, { id: $id });\n$updatedUser.set("username", $username);\n$updatedUser.set("bio", $bio);\n\n// Roughly equivalent to:\n// `UPDATE users SET username = $1, bio = $2 WHERE id = $3;`\n')),(0,r.kt)("h2",{id:"pgupdatesinglesetplan"},"$pgUpdateSingle.setPlan()"),(0,r.kt)("p",null,"Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"SetterStep"),' (a "modifier step", rather than an ',(0,r.kt)("inlineCode",{parentName:"p"},"ExecutableStep"),")\nthat can be useful when combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"applyPlan")," plan resolvers in arguments\nand input fields to build up the attributes to set on the updated row bit by\nbit."),(0,r.kt)("h2",{id:"pgupdatesinglegetattr"},"$pgUpdateSingle.get(attr)"),(0,r.kt)("p",null,"Returns a PgClassExpressionStep representing the given attribute from the\nupdated row. This is achieved by selecting the value using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE ... RETURNING ...")," syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const $updatedAt = $updatedUser.get("updated_at");\n')),(0,r.kt)("h2",{id:"pgupdatesinglerecord"},"$pgUpdateSingle.record()"),(0,r.kt)("p",null,"Returns a PgClassExpressionStep representing the full record that was updated."))}g.isMDXComponent=!0}}]);