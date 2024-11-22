import { ConnectRouter } from "@connectrpc/connect";
import { TestService } from "../gen/proto/v1/test_pb";

export const testService = (router: ConnectRouter) => {
  router.service(TestService, {
    async getTest(_req) {
      return {
        message: "Hello World!",
      };
    },
    async updateTest(_req) {
      return {
        message: "Hello World!",
      };
    },
  });
};
