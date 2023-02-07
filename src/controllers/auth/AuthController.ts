import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthenticationUseCase } from "../../useCases/auth/AuthenticationUseCase";

export class AuthController {
  static async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const token = await AuthenticationUseCase.execute({ email, password });

    return response.status(StatusCodes.OK).json({ token });
  }
}
