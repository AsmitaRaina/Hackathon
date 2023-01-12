const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const companySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
        default: 'company'
    }
    
},{timestamps:true}
);

companySchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

//middleware
companySchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Company = mongoose.model('Company',companySchema)

module.exports = Company