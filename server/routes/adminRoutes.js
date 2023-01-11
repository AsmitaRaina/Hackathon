const express = require("express");
const {authController, getAdminProfile, registerAdmin} = require("../controllers/adminController")

const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.route('/').post(registerAdmin)
router.route("/login").post(authController);
router.route('/profile').get(protect, getAdminProfile)

module.exports = router;