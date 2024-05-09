"use strict";(self.webpackChunk_localrepo_star_website=self.webpackChunk_localrepo_star_website||[]).push([[1204],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=i,b=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7896),i=(n(2784),n(876));const o={sidebar_position:4,title:"te.substring(()"},a="te.substring(str, stringType)",s={unversionedId:"api/te-substring",id:"api/te-substring",title:"te.substring(()",description:"If you're building a string and you want to inject untrusted content into it",source:"@site/tamedevil/api/te-substring.md",sourceDirName:"api",slug:"/api/te-substring",permalink:"/tamedevil/api/te-substring",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/utils/website/tamedevil/api/te-substring.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"te.substring(()"},sidebar:"tutorialSidebar",previous:{title:"te.lit()",permalink:"/tamedevil/api/te-lit"},next:{title:"te.join()",permalink:"/tamedevil/api/te-join"}},u={},p=[],c={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tesubstringstr-stringtype"},(0,i.kt)("inlineCode",{parentName:"h1"},"te.substring(str, stringType)")),(0,i.kt)("p",null,"If you're building a string and you want to inject untrusted content into it\nwithout opening yourself to code injection attacks, this is the method for you.\nPass the string you'd like escaped as the first argument, and the second\nargument should be ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"`")," depending on what type of string you're\nembedding into. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Some untrusted user input, could have anything in it\nconst untrusted = "\'\\"` \\\\\'\\\\\\"\\\\` ${process.exit(1)}";\n\n// Safely insert the untrusted input into a string\nconst code = te.run`return "abc${te.substring(untrusted, \'"\')}123";`;\n\nassert.strictEqual(code, "abc\'\\"` \\\\\'\\\\\\"\\\\` ${process.exit(1)}123");\n')))}d.isMDXComponent=!0}}]);