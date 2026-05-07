import mongoose from "mongoose";

const schemaNotes=new mongoose.Schema(
{
title:{
type:String,
required:true,
},
content:{
    type:String,
    required:true,
},
},
{timestamps:true}
);

const Note=mongoose.model("Note",schemaNotes)

export default Note;