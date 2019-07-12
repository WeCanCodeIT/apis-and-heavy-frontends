const request = require("supertest");

const User = require("../../src/models/User");
const app = require("../../app");

jest.mock("../../src/models/User.js", () => {
  return {
    create: jest.fn(() => {}),
    find: jest.fn(() => [])
  };
});

describe("UserRoutes", () => {
  describe("createUser", () => {
    test("should get a 200 status", done => {
      request(app)
        .post("/users")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(User.create.mock.calls.length).toEqual(1);
          expect(User.find.mock.calls.length).toEqual(1);
          done();
        });

      User.find.mockReset();
      User.create.mockReset();
    });
  });
});
