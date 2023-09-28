import app from "app";
import supertest from "supertest";

const server = supertest(app);

describe("API", () => {
  it("/health", async () => {
    const result = await server.get("/health");
    const { text, status } = result;
    expect(status).toEqual(200);
    expect(text).toEqual("OK!");
  });
});
