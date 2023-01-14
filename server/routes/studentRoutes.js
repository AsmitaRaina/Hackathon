const express = require("express");
const {authController, getUserProfile, registerUser} = require("../controllers/userController")

const {protect} = require('../middleware/authMiddleware')
//const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//const users = require('./data/students');
const Student = require('../models/StudentModel');
const Company = require('../models/CompanyModel');
//const connectDatabase = require("../config/database");

// dotenv.config({path:"server/config/config.env"})
// connectDatabase();

const router = express.Router();

router.route('/').post(registerUser)
router.route("/login").post(authController);
router.route('/profile').get(protect, getUserProfile)

router.get('/getstudentslist', async (req,res) => {
    //bnconsole.log(User.find());
    //console.log('server working');
    User.find().then(result => res.send(result))
    //res.send("Hello")
})

router.get('/dashboard', async (req,res) => {
    var {search} = req.query;

    if(!search)
    {
        search=''
    }
    let filterCompany = null
    const queryObject = {
        name : {$regex:search, $options:'i'}
    }

    console.log(queryObject)
    filterCompany = await Company.find(queryObject)

    res.status(200).json(filterCompany)

})

router.post('/apply', async (req,res) => {
    const companyName = req.body.companyName;
    const studentID = req.body.studentID;

    const company = await Company.find({name:companyName})
    const student = await Student.find({_id:studentID.toString()})


    aS = company[0].year.appliedStudents
    if (aS.indexOf(studentID) < 0){
        company[0].year.appliedStudents.push(studentID)
    }

    
    aS = student[0].appliedCompanies
    //console.log(student[0].appliedCompanies);

    if (aS.indexOf(company[0]._id) < 0){
       // console.log(company._id)
        student[0].appliedCompanies.push(company[0]._id)
        //console.log(student[0].appliedCompanies);
    }

    await company[0].save()
    await student[0].save()

    res.status(200).send('ok')
})

module.exports = router;