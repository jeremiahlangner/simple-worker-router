/// <reference types="@cloudflare/workers-types" />
type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (args: any) => any;
type Route = {
    path: URLPattern;
    method: Method;
    handler: Handler;
};
type HandlerParams = {
    request: Request;
    env: any;
    ctx: ExecutionContext;
};
declare class Router {
    routes: Route[];
    constructor(routes?: [string, Handler, Method?][]);
    setup(routes: [string, Handler, Method?][]): void;
    register(path: string, handler: Handler, method?: Method): void;
    handle(params: HandlerParams): any;
}
export { Method, Handler, type Route, Router };
