const Company = require('../models/CompanyModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken')

const registerCompany = asyncHandler(async(req,res)=>{
    const {name,email,password}= req.body
    const companyExist = await Company.findOne({email})
    if(companyExist){
        res.status(400)
        throw new Error('Company Already Exists!')
    }

    const company = await Company.create({name,email,password})
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
    const company = await Company.findOne({email})
    if(company && (await company.matchPassword(password))){
        res.json({
            _id : company._id,
            name: company.name,
            email: company.email,
            token: generateToken(company._id),
            type: company.type,
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