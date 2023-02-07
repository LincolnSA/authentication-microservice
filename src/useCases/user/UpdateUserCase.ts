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

export class UpdateUserUseCase {
  static async execute(request: User) {
    const { email,password } = request;

    const validateData = userSchema.safeParse({email, password});

    if(!validateData.success){
      const [firstError] = validateData.error.errors;
    
      throw new Error(firstError.message);
    }

    const updateUser = await UserRepository.update(request);

    return updateUser;
  }
}
