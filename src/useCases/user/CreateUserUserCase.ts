import { z } from "zod";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

const emailSchema = z
  .string({ invalid_type_error: "E-mail inválido!" })
  .email({ message: "E-mail inválido!" });

const passwordSchema = z
  .string()
  .min(4, { message: "Senha tem que ter no mínimo de 4 caracteres!" });

const userSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

interface CreateUserRequestDTO {
  email: string;
  password: string;
}

export class CreateUserUserCase {
  static async execute(request: CreateUserRequestDTO) {
    const { email, password } = request;

    const validateData = userSchema.safeParse({
      email,
      password: String(password),
    });

    if (!validateData.success) {
      const [firstError] = validateData.error.errors;

      throw new Error(firstError.message);
    }

    const userAlreadyExists = await UserRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Usuário já existe!");
    }

    const user = new User(email, password);

    const newUser = await UserRepository.create(user);

    return newUser;
  }
}
