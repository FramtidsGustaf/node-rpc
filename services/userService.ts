import { ConnectRouter, HandlerContext } from "@connectrpc/connect";
import {
  GetUserRequest,
  UpdateUserRequest,
  UserService,
} from "../gen/proto/v1/user_pb";

const getUser = async (_req: GetUserRequest, context: HandlerContext) => {
  console.log(context);
  return {
    name: "test",
    email: "test@test.test",
  };
};

const updateUser = async (_req: UpdateUserRequest, context: HandlerContext) => {
  console.log(context);
  return {
    message: "Hello World!",
  };
};

export const userService = (router: ConnectRouter) => {
  router.service(UserService, {
    getUser,
    updateUser,
  });
};
