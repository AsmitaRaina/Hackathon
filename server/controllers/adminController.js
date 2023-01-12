const Admin = require('../models/AdminModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken')

const registerAdmin = asyncHandler(async(req,res)=>{
    const {name,email,password}= req.body
    const adminExist = await Admin.findOne({email})
    if(adminExist){
        res.status(400)
        throw new Error('Admin Already Exists!')
    }

    const admin = await Admin.create({name,email,password})
    if(admin){
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            type: admin.type,
        })
    }else{
        res.status(404);
        throw new Error('Admin Not Found')
    }
});

const authController = asyncHandler(async (req , res) => {
    const {email , password} = req.body;
    const admin = await Admin.findOne({email})
    if(admin && (await admin.matchPassword(password))){
        res.json({
            _id : admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            type: admin.type,
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const getAdminProfile = asyncHandler(async(req,res) => {
    const admin = await Admin.findById(req.admin._id)
    if(admin){
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            type: admin.type,
        })
    }else{
        res.status(404)
        throw new Error("Admin Not Found")
    }
});

module.exports = {authController,getAdminProfile,registerAdmin}