const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    mobile:Number,
    password: String
});

const userModel=mongoose.model("user",userSchema);
module.exports = userModel; 
