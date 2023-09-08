/// <reference types="@cloudflare/workers-types" />
declare type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
declare type Handler = (params: {
    request: Request;
    ctx: any;
    env: any;
}) => any;
declare type Route = {
    path: URLPattern;
    method: Method;
    handler: Handler;
};
export declare class Router {
    routes: Route[];
    constructor(routes?: [string, Handler, Method?][]);
    register(path: string, handler: Handler, method?: Method): void;
    handle(params: {
        request: Request;
        ctx: any;
        env: any;
    }): any;
}
export {};
