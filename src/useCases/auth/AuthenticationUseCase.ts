import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { UserRepository } from "../../repositories/UserRepository";
import { z } from "zod";

interface AuthenticationRequestDTO {
  email: string;
  password: string;
}

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

export class AuthenticationUseCase {
  static async execute(request: AuthenticationRequestDTO) {
    const { email, password } = request;

    const validateData = userSchema.safeParse({
      email,
      password: String(password),
    });

    if (!validateData.success) {
      const [firstError] = validateData.error.errors;

      throw new Error(firstError.message);
    }

    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email/Senha incorretos!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Senha incorretos!");
    }

    const keySecretToken = process.env.KEY_SECRET_TOKEN as string;
    const token = sign({ email: user.email }, keySecretToken, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
