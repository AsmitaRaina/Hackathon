const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const User = require('./models/StudentModel');
const connectDatabase = require("./config/database");

dotenv.config({path:"server/config/config.env"})
connectDatabase();

const importData = async() => {
    try {
        await User.deleteMany()
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        console.log('Data Added')
        process.exit();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
};

const dataDestory = async() => {
    try{
        await User.deleteMany()
        console.log("Data Destroyed")
        process.exit()
    }
    catch(error){
        console.log(`${error}`)
    }
    
    
    
}

if(process.argv[2] === "-d"){
    dataDestory();
}else{
    importData();
}