import { UserRepository } from "../../repositories/UserRepository";

export class DeleteUserUseCase {
  static async execute(id: string) {
    const deletedUser = await UserRepository.delete(id);

    return deletedUser;
  }
}
