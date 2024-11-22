import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect";

const server = fastify({
  logger: true,
});

server.register(fastifyConnectPlugin, {
  routes,
});

server.listen({ host: "localhost", port: 8080 }, (err, address) => {
  if (err) {
    server.log.error(err);
  }
  console.log("server is listening at", address);
});
