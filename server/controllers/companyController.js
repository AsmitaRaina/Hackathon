const Company = require('../models/CompanyModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken')
const Student = require('../models/StudentModel');





const registerCompany = asyncHandler(async(req,res)=>{
    const {name,hrName,hrEmail,password,jobDescription,branches,mincgpa,ctc,pptDate}= req.body
    const companyExist = await Company.findOne({'name' : name})
    //console.log(companyExist);
    if(companyExist){
        res.status(400)
        throw new Error('Company Already Exists!')
    }

    const queryObject = {

        'name' : name,
        'hrProfile.name' : hrName,
        'hrProfile.email' : hrEmail,
        'hrProfile.password' : password,
        'jobProfile.jobDescription' : jobDescription,
        'jobProfile.branches' : branches,
        'jobProfile.mincgpa' : mincgpa,
        'jobProfile.ctc' : ctc,
        'jobProfile.pptDate' : pptDate,
    }
    const company = await Company.create(queryObject)
    if(company){
        res.status(201).json({
            _id: company._id,
            name: company.name,
            email: company.email,
            token: generateToken(company._id),
            type: company.type,
        })
    }else{
        res.status(404);
        throw new Error('Company Not Found')
    }
});

const authController = asyncHandler(async (req , res) => {
    const {email , password} = req.body;
    const company = await Company.findOne({'hrProfile.email' : email})
    if(company && (await company.matchPassword(password))){
        res.json({
            _id : company._id,
            name: company.name,
            hrName : company.hrProfile.name,
            email: company.hrProfile.email,
            token: generateToken(company._id),
           // students : JSON.stringify(handleRelation(company.year[0].selectedStudents))
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const getCompanyProfile = asyncHandler(async(req,res) => {
    const company = await Company.findById(req.company._id)
    if(company){
        res.json({
            _id: company._id,
            name: company.name,
            email: company.email,
            type: company.type,
        })
    }else{
        res.status(404)
        throw new Error("Company Not Found")
    }
});

module.exports = {authController,getCompanyProfile,registerCompany}