module.exports = function () {
  this.createUser = jest.fn((req, res, next) => {})
  this.readUsers = jest.fn((req, res, next) => {})
  this.readUser = jest.fn((req, res, next) => {})
  this.updateUser = jest.fn((req, res, next) => {})
  this.deleteUser = jest.fn((req, res, next) => {})
}