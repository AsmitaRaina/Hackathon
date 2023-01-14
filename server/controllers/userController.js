const User = require('../models/StudentModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken')

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password}= req.body
    const userExist = await User.findOne({'personal.email' : email})
    if(userExist){
        res.status(400)
        throw new Error('User Already Exists!')
    }

    const user = await User.create({name,email,password})
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
            token: generateToken(user._id),
            type: user.type,
        })
    }else{
        res.status(404);
        throw new Error('User Not Found')
    }
});

const authController = asyncHandler(async (req , res) => {
    const {email , password} = req.body;
    const user = await User.findOne({'personal.email' : email})
    if(user && (await user.matchPassword(password))){
        console.log(user);
        console.log(user.name,user.email,user.isAdmin,user.isSeller)
        res.json({
            _id : user._id,
            name: user.personal.name,
            email: user.personal.email,
            gender : user.personal.gender,
            dob : user.personal.dob,
            contact: user.personal.contact,
            batch: user.personal.batch,
            branch: user.personal.branch,
            
            token: generateToken(user._id),

        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(404)
        throw new Error("User Not Found")
    }
});

module.exports = {authController,getUserProfile,registerUser}