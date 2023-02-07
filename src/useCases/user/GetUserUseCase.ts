import { UserRepository } from "../../repositories/UserRepository";

interface GetUserRequestDTO {
  id: string;
}

export class GetUserUseCase {
  static async execute(request: GetUserRequestDTO) {
    const { id } = request;

    const user = await UserRepository.get(id);

    return user;
  }
}
