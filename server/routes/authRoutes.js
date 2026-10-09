const express = require("express");

const registerUser = require("../controllers/authController.js");
const loginUser = require("../controllers/loginController.js");
const googleUser = require("../controllers/googleController.js")

const router = express.Router();

router.post("/register", registerUser);
router.post("/google", googleUser);
router.post("/login", loginUser);

module.exports = router;
