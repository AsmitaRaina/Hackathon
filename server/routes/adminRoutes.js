const express = require("express");
const {authController, getAdminProfile, registerAdmin} = require("../controllers/adminController")

const {protect} = require('../middleware/authMiddleware')
const Company = require("../models/CompanyModel");
const Student = require("../models/StudentModel");
const router = express.Router();

router.route('/').post(registerAdmin)
router.route("/login").post(authController);
router.route('/profile').get(protect, getAdminProfile)


router.get('/dashboard', async (req, res) => {
    const companies = await Company.find({}).populate('year.selectedStudents').populate('year.appliedStudents')
    res.send(companies)
})

module.exports = router;