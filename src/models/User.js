const mongoose = require("mongoose");

module.exports = mongoose.model(
  "User",
  mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
  })
);
