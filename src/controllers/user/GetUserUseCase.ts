import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { GetUserUseCase } from "../../useCases/user/GetUserUseCase";

export class GetUserController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await GetUserUseCase.execute({ id });

    return response.status(StatusCodes.OK).json(user);
  }
}
