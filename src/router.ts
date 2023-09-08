type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (args: unknown) => unknown; // make sure args can be destructured for better typing

type Route = {
  path: URLPattern;
  method: Method;
  handler: Handler;
};

class Router {
  routes: Route[];

  constructor(routes: [string, Handler, Method?][] = []) {
    this.routes = [];

    for (const route of routes) {
      this.register(...route);
    }
  }

  register(path: string, handler: Handler, method: Method = "GET") {
    this.routes.push({
      path: new URLPattern({ pathname: path }),
      method,
      handler,
    });
  }

  handle(params: { request: Request; env: unknown; ctx: unknown }) {
    const { request } = params;

    for (const route of this.routes) {
      if (route.method !== request.method) continue;
      const match = route.path.exec({
        pathname: new URL(request.url).pathname,
      });
      if (match) return route.handler(params);
    }
    return new Response("Not found", { status: 404 });
  }
}

export { type Method, type Handler, type Route, Router }
