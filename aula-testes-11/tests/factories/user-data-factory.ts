import { UserInput } from "repository";

export function createUserData(): UserInput {
  return {
    email: "teste@teste.com.br",
    password: "teste",
  } as UserInput;
}
