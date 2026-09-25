const express = require("express");

const registerUser = require("../controllers/authController.js");
const loginUser = require("../controllers/loginController.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
