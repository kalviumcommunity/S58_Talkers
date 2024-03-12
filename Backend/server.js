const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const talkersModel = require('./Model/talkers.model');
const { talkersData } = require('./config/data');
const connection = require('./config/db');
const cors = require("cors");
app.use(cors());

app.use(express.json()); 


app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});



app.get("/GET",async (req,res)=>{
   let data= await talkersModel.find();
   res.send(data)
});


app.get("/postAllData", async (req, res) => {
    const result=await talkersModel.insertMany(talkersData)
    res.send(result)
});

app.post("/POST",async (req,res)=>{
  let document=req.body;
  try {
    let result=await talkersModel.create(document)
    res.json({msg:"Posted the document successfully"})
  } catch (error) {
    console.log(error)
    res.json({msg:"Something went wrong",err:error})
  }
});

app.put("/UPDATE/:id",async (req,res)=>{
let document=req.body;
let id=req.params.id
try {
  let result=await talkersModel.findByIdAndUpdate(id,document)
  res.json({msg:"Updated the document successfully"})
} catch (error) {
  console.log(error)
  res.send(error)
}
});

app.patch("/UPDATE/:id",async (req,res)=>{
  let document=req.body;
  let id=req.params.id
  console.log(id)
  try {
    let result=await talkersModel.findByIdAndUpdate(id,document)
    res.json({msg:"Updated the document successfully"})
  } catch (error) {
    console.log(error)
    res.send(error)
  }
  });


app.delete("/DELETE/:id",async (req,res)=>{
let document=req.body;
let id=req.params.id
let result=await talkersModel.findByIdAndDelete(id)
res.json({msg:"Deleted the document successfully"})
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
