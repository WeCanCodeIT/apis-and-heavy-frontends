const request = require("supertest");

const app = require("../../app");

jest.mock('../../src/controllers/users-controller.js')

describe("UserRoutes", () => {

  describe("createUser", () => {
    test("should get a 200 status", done => {
      request(app)
        .post("/users")
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          // expect(UsersController).toHaveBeenCalledTimes(1)
          done();
        });
    });
  });
});