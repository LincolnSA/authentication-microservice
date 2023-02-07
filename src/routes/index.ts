import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";

export const serverRoutes = Router();

serverRoutes.use(authRoutes);
serverRoutes.use(userRoutes);
