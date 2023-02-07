import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateUserUserCase } from "../../useCases/user/CreateUserUserCase";

export class CreateUserController {
  static async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const newUser = await CreateUserUserCase.execute({ email, password });

    return response.status(StatusCodes.CREATED).json(newUser);
  }
}
