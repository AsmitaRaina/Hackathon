const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     type: {
//         type: String,
//         require: true,
//         default: 'student'
//     }
// },{timestamps:true}
// );

const personalDetailsSchema = new mongoose.Schema({
    id: {
        type : Number,
        unique : true,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    name: {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    dob : {
        type : String,
        required : true,
    },
    contact: {
        type : Number,
        required : true,
    },
    batch: {
        type : Number,
        required : true,
    },
    branch: {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true,
    },

    guardianName : String,
    guardianContact : Number,
})

const acadDetailsSchema = new mongoose.Schema({
    batch : {
        type : Number,
        required : true,
    },
    degree : {
        type : String,
    },
    branch : {
        type : String,
    },
    cgpa : {
        type : Number,
    },
    tenth : {
        board : String,
        percentage : Number,
    },
    twelfth : {
        board : String,
        percentage : Number,
    },
    thritenth : {
        board : String,
        percentage : Number,
    },
})

const profDetailsSchema = new mongoose.Schema({
    resume : {
        type : String,
        required : true,
    },
})

const students = new mongoose.Schema({

    //personal details
    personal : personalDetailsSchema,


    //academic details
    academics : acadDetailsSchema,
    

    //professional details 
    professional : profDetailsSchema,

    appliedCompanies : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'companies'
    }],

})



students.methods.matchPassword = async function(enterPassword){
    console.log(this.personal.password);
    return await bcrypt.compare(enterPassword,this.personal.password)
}

//middleware
students.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.personal.password = await bcrypt.hash(this.personal.password, salt)
})

const Student = mongoose.model('Student', students);
//const User = mongoose.model('User',userSchema)

module.exports = Student