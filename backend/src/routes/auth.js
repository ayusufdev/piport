// backend/src/routes/auth.js

const express = require("express");
const router = express.Router();
const { piLogin } = require("../controllers/authController");

router.post("/pi-login", piLogin);

module.exports = router;
