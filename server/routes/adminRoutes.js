const express = require("express");
const {authController, getAdminProfile, registerAdmin} = require("../controllers/adminController")
const { authController, getAdminProfile, registerAdmin } = require("../controllers/adminController")

const {protect} = require('../middleware/authMiddleware')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

const posts = require('./announcements/postRoutes')
const replies = require('./announcements/replyRoutes')
const tags = require('./announcements/tagRoutes')

router.route('/').post(registerAdmin)
router.route("/login").post(authController);
router.route('/profile').get(protect, getAdminProfile)


router.get('/dashboard', async (req, res) => {
    const companies = await Company.find({}).populate('year.selectedStudents').populate('year.appliedStudents')
    res.send(companies)
})


module.exports = router;
router.use('/posts/', posts)
router.use('/replies/', replies)
router.use('/tags/', tags)

module.exports = router;
