import supertest from "supertest";
import app from "./../src/app";
import prisma from "../src/database";
import { UserInput } from "repository";

const api = supertest(app);
const userData: UserInput = {
  email: "w@gmail.com",
  password: "123456",
};

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const { status } = await api.post("/users").send(userData);
    expect(status).toBe(201);
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    await api.post("/users").send(userData);
    const { status } = await api.post("/users").send(userData);
    expect(status).toBe(409);
  });
});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    await api.post("/users").send(userData);
    const { body } = await api.get("/users");
    expect(body).toHaveLength(1);
  });

  it("should return 404 when can't find a user by id", async () => {
    const { status } = await api.get("/users/1");
    expect(status).toBe(404);
  });

  it("should return all users", async () => {
    await api.post("/users").send(userData);
    const { body } = await api.get("/users");
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: expect.any(String),
        }),
      ])
    );
  });
});
