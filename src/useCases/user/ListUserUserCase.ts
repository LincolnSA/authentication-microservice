import { UserRepository } from "../../repositories/UserRepository";

export class ListUserUserCase {
  static async execute() {
    const userList = await UserRepository.list();

    return userList;
  }
}
