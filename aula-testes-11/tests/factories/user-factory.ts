import { User } from "@prisma/client";
import prisma from "database";
import { UserInput } from "repository";

export async function createUser(data: UserInput): Promise<User> {
  return await prisma.user.create({
    data,
  });
}

export async function createManyUsers(data: UserInput) {
  await prisma.user.createMany({
    data: [
      {
        ...data,
      },
      {
        ...data,
        email: "teste2@teste.com.br",
      },
    ],
  });
}
