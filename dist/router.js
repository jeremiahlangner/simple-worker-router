"use strict";(()=>{var o=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,n="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:n,handler:e})}handle(t){let{request:e}=t;for(let n of this.routes){if(n.method!==e.method)continue;if(n.path.exec({pathname:new URL(e.url).pathname}))return n.handler(t)}return new Response("Not found",{status:404})}};})();
