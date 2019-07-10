const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send(await User.find());
});

// GET users
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.send(await User.findOne({ _id: id }));
});

// POST users
router.post("/", async (req, res, next) => {
  User.create({ name: req.body.name, age: req.body.age });
  res.send(await User.find());
});

// Update a User
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  let changes = {};

  for (updateKey of Object.keys(updates)) {
    changes[updateKey] = updates[updateKey];
  }

  res.send(
    await User.findByIdAndUpdate({ _id: id }, { $set: changes }, { new: true })
  );
});

// Delete a User
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;

  res.send(await User.remove({ _id }));
});

module.exports = router;
