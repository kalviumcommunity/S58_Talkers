const mongoose=require("mongoose")
require("dotenv").config();

let connection=mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports=connection;