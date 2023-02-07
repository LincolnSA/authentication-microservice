import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayloadDTO {
  sub: string;
}

export class AuthenticatedMiddleware {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authToken = request.headers.authorization;

    if (!authToken) {
      throw new Error("Token inválido!");
    }

    const [, token] = authToken.split(" ");

    if (!token) {
      throw new Error("Token inválido!");
    }

    try {
      const keySecretToken = process.env.KEY_SECRET_TOKEN as string;
      const { sub } = verify(token, keySecretToken) as PayloadDTO;

      request.user_id = sub;

      return next();
    } catch (error) {
      throw new Error("Token inválido!");
    }
  }
}
