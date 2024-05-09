"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[794],{30876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const l={},s="lambda",o={unversionedId:"step-library/standard-steps/lambda",id:"step-library/standard-steps/lambda",title:"lambda",description:"Takes the input step (or array of steps, or nothing) as the first argument, a",source:"@site/grafast/step-library/standard-steps/lambda.md",sourceDirName:"step-library/standard-steps",slug:"/step-library/standard-steps/lambda",permalink:"/grafast/step-library/standard-steps/lambda",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafast/step-library/standard-steps/lambda.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"groupBy",permalink:"/grafast/step-library/standard-steps/groupBy"},next:{title:"last",permalink:"/grafast/step-library/standard-steps/last"}},i={},p=[{value:"Single dependency version",id:"single-dependency-version",level:2},{value:"Example",id:"example",level:3},{value:"Dependency-free version",id:"dependency-free-version",level:2},{value:"Multiple dependencies version",id:"multiple-dependencies-version",level:2},{value:"Example",id:"example-1",level:3},{value:"Warning: no batching!",id:"warning-no-batching",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lambda"},"lambda"),(0,r.kt)("p",null,"Takes the input step (or array of steps, or nothing) as the first argument, a\ncallback as the second argument, and returns a step that represents the result\nof feeding each value (or array of values, or nothing) through the given\ncallback."),(0,r.kt)("p",null,"The callback should perform a calculation, or may fetch data, but must not have\nside effects. If you need to do something with side effects use\n",(0,r.kt)("a",{parentName:"p",href:"/grafast/step-library/standard-steps/sideEffect"},(0,r.kt)("inlineCode",{parentName:"a"},"sideEffect()"))," instead\n(which has a very similar API)."),(0,r.kt)("p",null,"If you are 100% certain that your callback function:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"does not do any asynchronous work (no promises),"),(0,r.kt)("li",{parentName:"ol"},"does not have any side effects,"),(0,r.kt)("li",{parentName:"ol"},"will not throw an error")),(0,r.kt)("p",null,"then for the very best performance, you can pass the third argument,\n",(0,r.kt)("inlineCode",{parentName:"p"},"isSyncAndSafe"),", as the value ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Do not do this unless you are certain!"),(0,r.kt)("h2",{id:"single-dependency-version"},"Single dependency version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function lambda<T, R>(\n  $input: ExecutableStep<T>,\n  callback: (input: T) => R | Promise<R>,\n  isSyncAndSafe = false,\n): ExecutableStep<R>;\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Takes a step representing a zero-based index, and converts it to a one-based\n// index by adding one to it.\nconst $oneBased = lambda($zeroBased, (zeroBased) => zeroBased + 1, true);\n")),(0,r.kt)("h2",{id:"dependency-free-version"},"Dependency-free version"),(0,r.kt)("p",null,"If your callback doesn't need any input then you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\ninstead of a step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function lambda<R>(\n  $input: null | undefined,\n  callback: () => R | Promise<R>,\n  isSyncAndSafe = false,\n): ExecutableStep<R>;\n")),(0,r.kt)("h2",{id:"multiple-dependencies-version"},"Multiple dependencies version"),(0,r.kt)("p",null,"If you need to pass multiple steps, you can use the\n",(0,r.kt)("a",{parentName:"p",href:"/grafast/step-library/standard-steps/list"},(0,r.kt)("inlineCode",{parentName:"a"},"list()"))," step to do so:\n",(0,r.kt)("inlineCode",{parentName:"p"},"lambda(list([$a, $b, $c]), ([a, b, c]) => a + b + c)"),"."),(0,r.kt)("p",null,"If you'd prefer to save a few characters you can pass the array of steps\ndirectly and we'll automatically wrap it in ",(0,r.kt)("inlineCode",{parentName:"p"},"list()")," for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function lambda<Tuple extends [...any[]], R>(\n  // i.e. $input: ExecutableStep[],\n  $input: { [Index in keyof Tuple]: ExecutableStep<Tuple[Index]> },\n  callback: (input: Tuple) => R | Promise<R>,\n  isSyncAndSafe = false,\n): ExecutableStep<R>;\n")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Passing an array of steps gives you the values as an array:\nconst $aPlusB = lambda([$a, $b], ([a, b]) => a + b, true);\n")),(0,r.kt)("h2",{id:"warning-no-batching"},"Warning: no batching!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"lambda")," is an escape hatch")," that breaks you out of Gra",(0,r.kt)("em",{parentName:"p"},"fast"),"'s batching;\nyou should only use it for the most trivial of operations (i.e. synchronous JS\ncode that doesn't perform heavy computation and wouldn't benefit from\nbatching)."),(0,r.kt)("p",null,"In most cases, you should use ",(0,r.kt)("a",{parentName:"p",href:"./loadOne"},(0,r.kt)("inlineCode",{parentName:"a"},"loadOne"))," instead. Here's what the\nexamples above might look like with ",(0,r.kt)("inlineCode",{parentName:"p"},"loadOne")," - note that these callbacks\nare now called with all the values at once, rather than one at a time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const $oneBasedIndex = loadOne($zeroBasedIndex, (allN) =>\n  allN.map((n) => n + 1),\n);\n\nconst $aPlusB = loadOne(list([$a, $b]), (allAsAndBs) =>\n  allAsAndBs.map(([a, b]) => a + b),\n);\n")))}u.isMDXComponent=!0}}]);