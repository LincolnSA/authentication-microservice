import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../useCases/user/DeleteUserUseCase";

import { StatusCodes } from "http-status-codes";

export class DeleteUserController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletedUser = await DeleteUserUseCase.execute(id);

    return response.status(StatusCodes.NO_CONTENT).json(deletedUser);
  }
}
