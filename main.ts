import { serveDir, serveFile } from "https://deno.land/std@0.207.0/http/file_server.ts";
Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
