const express = require("express");
const {authController, getUserProfile, registerUser} = require("../controllers/userController")

const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.route('/').post(registerUser)
router.route("/login").post(authController);
router.route('/profile').get(protect, getUserProfile)

module.exports = router;