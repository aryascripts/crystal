"use strict";(self.webpackChunk_localrepo_grafast_website=self.webpackChunk_localrepo_grafast_website||[]).push([[9635],{30876:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(2784);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=s,m=c["".concat(l,".").concat(d)]||c[d]||v[d]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86813:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7896),s=(t(2784),t(30876));const o={},a="Nuxt API route",i={unversionedId:"servers/nuxt",id:"servers/nuxt",title:"Nuxt API route",description:"Grafserv handles a number of API routes, so you should define one for each of",source:"@site/grafserv/servers/nuxt.md",sourceDirName:"servers",slug:"/servers/nuxt",permalink:"/grafserv/servers/nuxt",draft:!1,editUrl:"https://github.com/graphile/crystal/tree/main/grafast/website/grafserv/servers/nuxt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node HTTP server",permalink:"/grafserv/servers/node"}},l={},p=[{value:"Websocket support",id:"websocket-support",level:2}],u={toc:p},c="wrapper";function v(e){let{components:r,...t}=e;return(0,s.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nuxt-api-route"},"Nuxt API route"),(0,s.kt)("p",null,"Grafserv handles a number of API routes, so you should define one for each of\nthe things you care about. It's critical that you ensure that the paths line up\nwith those used in the Graphile config, otherwise the assets will not correctly\nbe served/referenced, this may cause issues when communicating between Ruru\nand GraphQL."),(0,s.kt)("p",null,"Creating ",(0,s.kt)("inlineCode",{parentName:"p"},"grafserv"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/grafserv/serv.ts"',title:'"server/grafserv/serv.ts"'},'import { grafserv } from "grafserv/h3/v1";\nimport preset from "./graphile.config";\nimport schema from "./schema.mjs";\n\n// Create a shared Grafserv instance\nexport const serv = grafserv({ schema, preset });\n')),(0,s.kt)("p",null,"and the API routes :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/graphql.ts"',title:'"server/api/graphql.ts"'},'import { serv } from "@/server/grafserv/serv";\n\n// Create and export the `/api/graphql` route handler\nexport default eventHandler((event) => serv.handleGraphQLEvent(event));\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/routes/ruru.ts"',title:'"pages/routes/ruru.ts"'},'import { serv } from "@/server/grafserv/serv";\n\n// Create and export the `/ruru` route handler\nexport default eventHandler((event) => serv.handleGraphiqlEvent(event));\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/api/graphql/stream.ts"',title:'"pages/api/graphql/stream.ts"'},'import { serv } from "@/server/grafserv/serv";\n\n// Create and export the `/api/graphql/stream` route handler\nexport default eventHandler((event) => serv.handleEventStreamEvent(event));\n')),(0,s.kt)("h1",{id:"experimental"},"Experimental"),(0,s.kt)("h2",{id:"websocket-support"},"Websocket support"),(0,s.kt)("p",null,"Nitro and h3 does not yet support WebSocket."),(0,s.kt)("p",null,"An unofficial and experimental workaround consists to create a nuxt module:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/grafserv/index.ts"',title:'"modules/grafserv/index.ts"'},'// nuxt auto-register modules located in `modules/*.ts` or `modules/*/index.ts`\n\nimport { defineNuxtModule, addServerPlugin } from "@nuxt/kit";\n\nimport httpProxy from "http-proxy";\n\nexport default defineNuxtModule({\n  async setup(options, nuxt) {\n    /**\n     * Register websockets in DEVELOPMENT mode.\n     */\n    if (nuxt.options.dev) {\n      // hook called in development only\n      nuxt.hook("listen", (devServer) => {\n        // create a proxy for routing ws to runtime server created in dev plugin\n        const proxy = httpProxy.createProxy({\n          target: {\n            host: "localhost",\n            port: 3100,\n          },\n        });\n        // registering ws on devServer\n        devServer.on("upgrade", (req, socket, head) => {\n          // routing ws by path\n          switch (req.url) {\n            case "/api/graphql":\n              // proxy websocket to runtime server created in dev plugin\n              proxy.ws(req, socket, head);\n              break;\n            default:\n              socket.destroy();\n          }\n        });\n      });\n      // Registering runtime plugin for dev\n      addServerPlugin("@/modules/grafserv/ws-dev");\n    }\n\n    /**\n     * Register websockets in PRODUCTION mode.\n     */\n    if (!nuxt.options.dev)\n      // Registering runtime plugin for production\n      addServerPlugin("@/modules/grafserv/ws");\n  },\n});\n')),(0,s.kt)("p",null,"and two Nitro plugins (one for dev, and one for prod)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/grafserv/ws-dev.ts"',title:'"modules/grafserv/ws-dev.ts"'},'import { Server } from "http";\nimport { serv } from "@/server/grafserv/serv";\n\n// plugin running in DEVELOPMENT (runtime)\nexport default defineNitroPlugin(async (nitroApp) => {\n  // Create a server for handling websockets\n  const server = new Server().listen({ port: 3100 }, () =>\n    console.log("Runtime server listening on port 3100"),\n  );\n  // Cleanly close server (on leave or HMR before plugin reload)\n  nitroApp.hooks.hookOnce("close", () => {\n    server.closeAllConnections();\n    server.close((err) =>\n      err\n        ? console.warn("Runtime server wrongly closed", err)\n        : console.log("Runtime server stopped"),\n    );\n  });\n  // Attaching ws to server\n  serv.attachWebsocketsToServer_experimental(server);\n});\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/grafserv/ws.ts"',title:'"modules/grafserv/ws.ts"'},'import { serv } from "@/server/grafserv/serv";\n\n// plugin running in PRODUCTION (runtime)\nexport default defineNitroPlugin(async (nitroApp) => {\n  // this hook will be called only once at first http request\n  nitroApp.hooks.hookOnce("request", (event: H3Event) => {\n    const server = event.node.req.socket.server;\n    if (server) {\n      // Attaching ws to server\n      serv.attachWebsocketsToServer_experimental(server);\n    }\n  });\n});\n')))}v.isMDXComponent=!0}}]);