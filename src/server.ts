import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";

import { serverRoutes } from "./routes";
import { ErrorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware";

const PORT = process.env.PORT || 3333;
const server = express();

server.use(cors());

server.use(express.json());

server.use(serverRoutes);

server.use(ErrorHandlerMiddleware.handle);

server.listen(PORT, () => console.log("Server running!"));
