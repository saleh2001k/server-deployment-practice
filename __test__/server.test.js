"use strict";

const supertest = require("supertest");
const { app } = require("../server");
const request = supertest(app);

describe("Server test", () => {
  it("Handles not found pages", async () => {
    const response = await request.get("/items");
    expect(response.status).toEqual(404);
  });

  it("Handles the root path", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Welcome to the Home page");
  });

  it("Handles errors", async () => {
    const response = await request.get("/bad");
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual("/bad");
  });
});
