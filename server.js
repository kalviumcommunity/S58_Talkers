const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const talkersModel = require('./Model/talkers.model');
const { talkersData } = require('./config/data');

app.use(express.json());

// Connect to MongoDB using the provided URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send(`Database Connection Status: ${db.readyState === 1 ? 'Connected' : 'Disconnected'}`);
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});


app.get("/GET", async (req, res) => {
  let data = await talkersModel.find();
  res.send(data);
});

app.get("/postAllData", async (req, res) => {
  const result = await talkersModel.insertMany(talkersData);
  res.send(result);
});

app.post("/POST", async (req, res) => {
  let document = req.body;
  let result = await talkersModel.create(document);
  res.json({ msg: "Posted the document successfully" });
});

app.put("/UPDATE/:id", async (req, res) => {
  let document = req.body;
  let id = req.params.id;
  try {
    let result = await talkersModel.findByIdAndUpdate(id, document);
    res.json({ msg: "Updated the document successfully" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.patch("/UPDATE/:id", async (req, res) => {
  let document = req.body;
  let id = req.params.id;
  try {
    let result = await talkersModel.findByIdAndUpdate(id, document);
    res.json({ msg: "Updated the document successfully" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.delete("/DELETE/:id", async (req, res) => {
  let document = req.body;
  let id = req.params.id;
  let result = await talkersModel.findByIdAndDelete(id);
  res.json({ msg: "Deleted the document successfully" });
});

app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;

