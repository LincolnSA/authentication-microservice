import { prismaClient } from "../prisma";

import { User } from "../entities/User";

export class UserRepository {
  static async get(id: string) {
    const user = await prismaClient.user.findFirst({
      where: { id },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }

  static async findByEmail(email: string) {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });

    return user;
  }

  static async list() {
    const userList = await prismaClient.user.findMany({
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return userList;
  }

  static async create(request: User) {
    const { email, password } = request;

    const newUser = await prismaClient.user.create({
      data: { email, password },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return newUser;
  }

  static async update(request: User) {
    try {
      const { email, password, id } = request;

      const newUser = await prismaClient.user.update({
        where: { id },
        data: { email, password },
        select: {
          id: true,
          email: true,
          created_at: true,
          updated_at: true,
        },
      });

      return newUser;
    } catch (error) {
      throw new Error("Usuário não encontrado!");
    }
  }

  static async delete(id: string) {
    try {
      const deletedUser = await prismaClient.user.delete({
        where: { id },
      });

      return deletedUser;
    } catch (error) {
      throw new Error("Usuário não encontrado!");
    }
  }
}
