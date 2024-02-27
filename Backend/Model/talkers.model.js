const mongoose=require("mongoose");

const talkersSchema=new mongoose.Schema({
        sr_no: Number,
        name: String,
        avg_call_time: Number,
        social_media_usage: Number,
        class_participation_percentage: Number,
        study_group_participation: Boolean,
        reaction_to_feedback: String,
        img_link: String
});

const talkersModel=mongoose.model("talker",talkersSchema);
module.exports = talkersModel; 
