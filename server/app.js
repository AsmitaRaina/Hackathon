const express = require("express");
const app=express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rouet imports
const user = require("./routes/userRoutes");
const company = require("./routes/companyRoutes");
const admin = require("./routes/adminRoutes");
//Routes

app.use("/api/v1/students",user);
app.use("/api/v1/company",company);
app.use("/api/v1/admin",admin);




module.exports=app;