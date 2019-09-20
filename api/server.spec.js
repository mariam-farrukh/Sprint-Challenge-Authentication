const request = require("supertest");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig.js");
const server = require("./server.js");

const Users = require("../auth/auth-model.js");

describe("server", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
  
    it('testing running with DB_ENV = "testing" ', () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
});