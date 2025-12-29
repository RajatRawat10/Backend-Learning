import { type } from "express/lib/response";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
content:{
    type:String,
    required:true,
},
complete:{
    type:Boolean,
    default:false,
},
createdBy:{
    type:String,
}

}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);
