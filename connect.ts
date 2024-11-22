import type { ConnectRouter } from "@connectrpc/connect";
import { userService } from "./services/userService";
import { testService } from "./services/testService";

export default (router: ConnectRouter) => {
  userService(router);
  testService(router);
};
