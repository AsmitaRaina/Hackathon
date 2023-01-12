const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const adminSchema = mongoose.Schema({
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
        default: 'admin'
    }
    
},{timestamps:true}
);

adminSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

//middleware
adminSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Admin = mongoose.model('Admin',adminSchema)

module.exports = Admin