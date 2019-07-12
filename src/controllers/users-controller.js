const User = require("../models/User");

class UsersController {
  static async createUser(req, res, next) {
    User.create({ name: req.body.name, age: req.body.age });
    res.send(await User.find());
  }

  static async readUsers(req, res, next) {
    res.send(await User.find());
  }

  static async readUser(req, res, next) {
    const id = req.params.id;
    res.send(await User.findOne({ _id: id }));
  }

  static async updateUser(req, res, next) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await User.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  static async deleteUser(req, res, next) {
    const _id = req.params.id;
    res.send(await User.remove({ _id }));
  }
}

module.exports = UsersController;
