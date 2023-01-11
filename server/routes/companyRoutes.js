const express = require("express");
const {authController, getCompanyProfile, registerCompany} = require("../controllers/companyController")

const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.route('/').post(registerCompany)
router.route("/login").post(authController);
router.route('/profile').get(protect, getCompanyProfile)

module.exports = router;