const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

// POST users
router.post("/", UsersController.createUser);

/* GET users listing. */
router.get("/", UsersController.readUsers);

// GET users
router.get("/:id", UsersController.readUser);

// Update a User
router.put("/:id", UsersController.updateUser);

// Delete a User
router.delete("/:id", UsersController.deleteUser);

module.exports = router;
