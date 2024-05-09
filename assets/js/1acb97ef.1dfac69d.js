"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[9757],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7896),a=(r(2784),r(30876));const o={sidebar_position:3},i="Relations",l={unversionedId:"step-library/dataplan-pg/registry/relations",id:"step-library/dataplan-pg/registry/relations",title:"Relations",description:"In @dataplan/pg, a relation is a uni-directional link from a",source:"@site/grafast/step-library/dataplan-pg/registry/relations.md",sourceDirName:"step-library/dataplan-pg/registry",slug:"/step-library/dataplan-pg/registry/relations",permalink:"/grafast/step-library/dataplan-pg/registry/relations",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafast/step-library/dataplan-pg/registry/relations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/grafast/step-library/dataplan-pg/registry/resources"},next:{title:"Full registry example",permalink:"/grafast/step-library/dataplan-pg/registry/example"}},s={},c=[{value:"From codec to resource",id:"from-codec-to-resource",level:2},{value:"Uni-directional",id:"uni-directional",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relations"},"Relations"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"@dataplan/pg"),", a relation is a uni-directional link from a\n",(0,a.kt)("a",{parentName:"p",href:"./codecs"},"codec")," to a ",(0,a.kt)("a",{parentName:"p",href:"./resources"},"resource"),", detailing how to get records\nfrom the resource given that you already have data for the given codec."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Do not confuse this with the standard RDBMS term "relation" which effectively\nmeans a "table" (or table-like thing). To avoid confusion, we will not refer to\na table as a "relation."')),(0,a.kt)("h2",{id:"from-codec-to-resource"},"From codec to resource"),(0,a.kt)("p",null,"The relation starts at a ",(0,a.kt)("em",{parentName:"p"},"codec")," rather than a ",(0,a.kt)("em",{parentName:"p"},"resource")," because you should be\nable to traverse it no matter where the data came from - even if you got the\ncurrent user by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"current_user()")," function you've defined in your\ndatabase (rather than selecting from the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," table), you should still be\nable to navigate from the resulting user data to the resources related to\nusers."),(0,a.kt)("h2",{id:"uni-directional"},"Uni-directional"),(0,a.kt)("p",null,'Relations are uni-directional; if you want the relationship to go\nboth ways you must add both forward and backward relations. In a database, a\nrelationship is normally represented by a "foreign key" constraint which only\nexists on one side of the relationship (the "referencing" table), and it\nreferences a remote table (the "referencee" table). In ',(0,a.kt)("inlineCode",{parentName:"p"},"@dataplan/pg"),' the\n"forward" relation goes from the referencing codec to the referencee table and\nis unique; the backward relation goes from the referencee codec to the\nreferencing table and should be flagged ',(0,a.kt)("inlineCode",{parentName:"p"},"isReferencee: true"),". The forward\nrelation is always unique, the backward relation may or may not be unique\ndepending on if the remote attributes have a unique constraint on them or not."),(0,a.kt)("p",null,"TODO: more documentation on how to use relations"))}d.isMDXComponent=!0}}]);