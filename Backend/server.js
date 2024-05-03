const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
const talkersModel = require('./Model/talkers.model');
const { talkersData } = require('./config/data');
const connection = require('./config/db');
const cors = require("cors");
const Joi =  require("joi");
const brcypt=require("bcrypt");
const userModel = require('./Model/User.model');
app.use(cors());
app.use(express.json()); 

const userSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile:Joi.number().required(),
  password: Joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[@])/).required(),
});


app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/register',async(req,res)=>{
  let payload=req.body
  let {password}=req.body;
  const { error, value } = userSchema.validate(payload);
  console.log(error)
  if (error) {
      res.json({"msg":"Validation unsuccessfully"})
  }else{

    try {
      brcypt.hash(password,2,async function(err,hash){
        let result=await userModel.create({...payload,password:hash})
        res.json({msg:"Validated & SignUp successfully",result})
      })
      
    } catch (error) {
      console.log(error)
      res.json({msg:"Something went wrong",err:error})
    }
  }
})

app.post('/login',async (req,res)=>{
  let payload=req.body;
  const {username,password}=payload;
  try {
    let result=await userModel.findOne({username});
    if (result){
      const token = jwt.sign(payload, process.env.secretKey);
      res.json({Token:token,msg:"Hurray! Login Successfull"});
    }else{
      res.json({msg:"User not found, Please Register/SignUp"})
    }
  } catch (error) {
    res.json({msg:"Something went wrong",Error:error})
  }
})


app.get("/GET",async (req,res)=>{
   let data= await talkersModel.find();
   res.send(data)
});


app.get("/postAllData", async (req, res) => {
    const result=await talkersModel.insertMany(talkersData)
    res.send(result)
});

const postSchema = Joi.object({
  sr_no: Joi.number().required(),
  name: Joi.string().required(),
  avg_call_time: Joi.number().optional(),
  social_media_usage:Joi.number().optional(),
  class_participation_percentage: Joi.number().optional(),
  study_group_participation: Joi.boolean().optional(),
  reaction_to_feedback: Joi.string().optional(),
  img_link: Joi.string().required(),
});

app.post("/POST",async (req,res)=>{
  let payload=req.body;
  const { error, value } = postSchema.validate(payload);
  if (error){
    res.json({"msg":"Validation Failed"})
  }else{
  try {
    let result=await talkersModel.create(payload)
    res.json({msg:"Posted the document and signup successfully"})
  } catch (error) {
    console.log(error)
    res.json({msg:"Something went wrong",err:error})
  }
}
});

app.put("/UPDATE/:id",async (req,res)=>{
let payload=req.body;
let id=req.params.id
try {
  let result=await talkersModel.findByIdAndUpdate(id,payload)
  res.json({msg:"Updated the document successfully"})
} catch (error) {
  console.log(error)
  res.send(error)
}
});

app.patch("/UPDATE/:id",async (req,res)=>{
  let payload=req.body;
  let id=req.params.id
  console.log(id)
  try {
    let result=await talkersModel.findByIdAndUpdate(id,payload)
    res.json({msg:"Updated the document successfully"})
  } catch (error) {
    console.log(error)
    res.send(error)
  }
  });


app.delete("/DELETE/:id",async (req,res)=>{
let id=req.params.id
  try {
    let result=await talkersModel.findByIdAndDelete(id)
    res.json({msg:"Deleted the document successfully"})
    
  } catch (error) {
    
  }
})

app.listen(port, async() => {
  try {
     await connection;
     console.log("connected to DB")
  } catch (error) {
     console.log(error)
  }
   console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
