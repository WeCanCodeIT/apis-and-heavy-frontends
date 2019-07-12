const User = require("../models/User");

class UsersController {
  constructor() {}

  async createUser(req, res, next) {
    User.create({
      name: req.body.name,
      age: req.body.age
    });
    res.json(await User.find());
  }

  async readUsers(req, res, next) {
    res.json(await User.find());
  }

  async readUser(req, res, next) {
    const id = req.params.id;
    res.json(await User.findOne({
      _id: id
    }));
  }

  async updateUser(req, res, next) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.json(
      await User.findByIdAndUpdate({
        _id: id
      }, {
        $set: changes
      }, {
        new: true
      })
    );
  }

  async deleteUser(req, res, next) {
    const _id = req.params.id;
    res.json(await User.remove({
      _id
    }));
  }
}

module.exports = UsersController;