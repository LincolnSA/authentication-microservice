import { Router } from "express";

import { GetUserController } from "../controllers/user/GetUserUseCase";
import { ListUserController } from "../controllers/user/ListUserController";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";
import { AuthenticatedMiddleware } from "../middlewares/AuthenticatedMiddleware";

export const userRoutes = Router();

userRoutes.get(
  "/users",
  AuthenticatedMiddleware.handle,
  ListUserController.handle
);
userRoutes.post(
  "/users",
  AuthenticatedMiddleware.handle,
  CreateUserController.handle
);
userRoutes.get(
  "/users/:id",
  AuthenticatedMiddleware.handle,
  GetUserController.handle
);
userRoutes.put(
  "/users/:id",
  AuthenticatedMiddleware.handle,
  UpdateUserController.handle
);
userRoutes.delete(
  "/users/:id",
  AuthenticatedMiddleware.handle,
  DeleteUserController.handle
);
