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

    describe("POST /api/auth/register", () => {
        it("returns status 201", () => {
            return request(server)
              .post('/api/auth/register')
              .send({username:'potato', password: 'potato'})
              .then(res => {
                  expect(res.status).toBe(201);
              });
        });

        it("should insert a user into the db", () => {
            return request(server)
              .post('/api/auth/register')
              .send({username:'potato', password: 'potato'})
              .then(res => {
                  expect(res.body.length).toBe(1);
              });
        });
    });

    describe("POST /api/auth/login", () => {
        it("returns status 200", () => {
            request(server)
              .post("api/auth/login")
              .send({username:'potato', password: 'potato'})
              .then(res => {
                  expect(res.status).toBe(200)
              });
        });
        it("returns status 401", () => {
            request(server)
              .post("api/auth/login")
              .send({username:'potato', password: 'potato1'})
              .then(res => {
                  expect(res.status).toBe(401)
              });
        });
    })
});