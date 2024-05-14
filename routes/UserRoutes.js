const express = require("express");
const router = express.Router();

const { createUser, resetpassword, forgotpassword, passwordcheck } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/resetpassword').post(resetpassword);
router.route('/forgotpassword').post(forgotpassword);
router.route('/passwordcheck').post(passwordcheck);

module.exports = router;