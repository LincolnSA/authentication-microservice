import { PrismaClient } from "@prisma/client";
import { User } from "../src/entities/User";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const userName = process.env.USER_NAME as string;
  const userPassword = process.env.USER_PASSWORD as string;
  const userAdmin = new User(userName, userPassword);

  await prisma.user.create({
    data: userAdmin,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
