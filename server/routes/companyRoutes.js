const express = require("express");
const {authController, getCompanyProfile, registerCompany} = require("../controllers/companyController")
//const mongoose = require('mongoose')
const {protect} = require('../middleware/authMiddleware')
//const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//const users = require('./data/students');
const Company = require('../models/CompanyModel');
const Student = require('../models/StudentModel');
//const connectDatabase = require("../config/database");
// mongoose.connect('mongodb+srv://sameerag771:ushagupta@cluster0.srpymor.mongodb.net/test',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {console.log("connected!")});

// dotenv.config({path:"server/config/config.env"})
// connectDatabase();
const router = express.Router();

router.route('/').post(registerCompany)
router.route("/login").post(authController);
router.route('/profile').get(protect, getCompanyProfile)


router.get('/getcompany', async (req,res) => {
    //bnconsole.log(User.find());
    //console.log('server working');
    Company.find().then(res => console.log(res))
    res.send("Hello")
})

router.post('/initialhit', async (req,res) => {

        const company = req.body.companyName;

        const companyExist = await Company.find({name:company})
        if(!companyExist){
            res.status(400)
            throw new Error('Company Does Not Exist!')
        }
        const appliedStudents = companyExist[0].year.appliedStudents;

        result = []
        for(var i=0;i<appliedStudents.length;i++){
            const student = await Student.find({_id : appliedStudents[i].toString()})
            result.push(student[0])
        }

        res.status(200).json({
            appliedStudents: result
        })
})

router.post('/submitround1', async (req,res) => {
    const companyName = req.body.companyName;
    const round1Students = req.body.round1Students;
    const company = await Company.find({name:companyName})
    console.log(company[0].year.round1Students)
    company[0].year.round1Students.push(...round1Students)

    await company[0].save()

    const companyExist = await Company.find({name:companyName})
    console.log(companyExist[0].year.round1Students)

    res.status(200).send("Success")
})



module.exports = router;