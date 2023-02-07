import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ListUserUserCase } from "../../useCases/user/ListUserUserCase";

export class ListUserController {
  static async handle(request: Request, response: Response) {
    const userList = await ListUserUserCase.execute();

    return response.status(StatusCodes.OK).json(userList);
  }
}
