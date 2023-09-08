/// <reference types="@cloudflare/workers-types" />
type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (args: unknown) => unknown;
type Route = {
    path: URLPattern;
    method: Method;
    handler: Handler;
};
declare class Router {
    routes: Route[];
    constructor(routes?: [string, Handler, Method?][]);
    register(path: string, handler: Handler, method?: Method): void;
    handle(params: {
        request: Request;
        env: unknown;
        ctx: unknown;
    }): unknown;
}
export { Method, Handler, type Route, Router };
