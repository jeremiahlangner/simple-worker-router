/// <reference types="@cloudflare/workers-types" />
type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (args: unknown) => unknown;
type Route = {
    path: URLPattern;
    method: Method;
    handler: Handler;
};
type HandlerParams = {
    request: Request;
    env: unknown;
    ctx: ExecutionContext;
};
declare class Router {
    routes: Route[];
    constructor(routes?: [string, Handler, Method?][]);
    register(path: string, handler: Handler, method?: Method): void;
    handle(params: HandlerParams): unknown;
}
export { Method, Handler, type Route, Router };
