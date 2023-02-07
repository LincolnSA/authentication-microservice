import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class ErrorHandlerMiddleware {
  static async handle(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (error instanceof Error) {
      return response
        .status(StatusCodes.BAD_REQUEST)
        .json({ erro: error.message });
    }

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      erro: "Erro interno no servidor!",
    });
  }
}
