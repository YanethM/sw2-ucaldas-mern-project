const userController = require("../controllers/user_controller");
const express = require("express");
const router = express.Router();

// http://localhost:3000/api/v1/users/new-user
router.post("/new-user", userController.createUser);
router.get("/", userController.listUsers);
router.get("/:id", userController.getUser);
router.patch("/edit/:id", userController.editUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
