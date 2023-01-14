const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const companySchema = mongoose.Schema({
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
//         default: 'company'
//     }
    
// },{timestamps:true}
// );

const hrProfileSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,

})

const jobProfileSchema  = new mongoose.Schema({
    jobDescription : String,
    branches : [String],
    mincgpa : Number,
    ctc : Number,
    pptDate : String,
    oaDate : String,
})

const yearSchema = new mongoose.Schema({
    interestedStudents : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    }],
    appliedStudents : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    }],
    round1Students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    }],
    round2Students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    }],
    selectedStudents : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    }]
})

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    hrProfile : hrProfileSchema,
    jobProfile : jobProfileSchema,

    year : yearSchema
})


companySchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.hrProfile.password)
}

//middleware
companySchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.hrProfile.password, salt)
})

const Company = mongoose.model('Company',companySchema)

module.exports = Company