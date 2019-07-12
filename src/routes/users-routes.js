const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

const usersController = new UsersController()

// POST users
router.post("/", usersController.createUser);

/* GET users listing. */
router.get("/", usersController.readUsers);

// GET users
router.get("/:id", usersController.readUser);

// Update a User
router.put("/:id", usersController.updateUser);

// Delete a User
router.delete("/:id", usersController.deleteUser);

module.exports = router;