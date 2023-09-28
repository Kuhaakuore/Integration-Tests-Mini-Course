import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });

  it("Given a number of elements should return the respective fibonacci sequence", async () => {
    const response = await api.get("/fibonacci?elements=6");
    const { body } = response
    expect(body).toEqual(expect.arrayContaining([0, 1]));
  });

  it("Should return 400 if number of elements is invalid", async () => {
    const response = await api.get("/fibonacci");
    const { status } = response;
    expect(status).toEqual(400);
  });
});
