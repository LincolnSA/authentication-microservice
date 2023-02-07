import { Router } from "express";
import { AuthController } from "../controllers/auth/AuthController";

export const authRoutes = Router();

authRoutes.post("/login", AuthController.handle);
