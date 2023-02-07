import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UpdateUserUseCase } from "../../useCases/user/UpdateUserCase";

export class UpdateUserController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { email, password } = request.body;

    const updatedUser = await UpdateUserUseCase.execute({
      id,
      email,
      password,
    });

    return response.status(StatusCodes.OK).json(updatedUser);
  }
}
