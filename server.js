const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const talkersModel = require('./Model/talkers.model');
const { talkersData } = require('./config/data');

app.use(express.json()); // Middleware para parsear los JSON que se envian por POST

const mongoURI = 'mongodb+srv://abhishekchaudhari:ABHISHEK21@cluster0.gxqu2ty.mongodb.net/newDb?retryWrites=true&w=majority';

let connection=mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// app.get('/', (req, res) => {
//   res.send(`Database Connection Status: ${db.readyState === 1 ? 'Connected' : 'Disconnected'}`);
// });


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
  let result=await talkersModel.create(document)
  res.json({msg:"Posted the document successfully"})
});

app.put("/UPDATE/:id",async (req,res)=>{
let document=req.body;
let id=req.params.id
// console.log(id)
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
    // console.log(connection)
    await connection;
    console.log("connected to DB")
  } catch (error) {
    console.log(error)
  }
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
