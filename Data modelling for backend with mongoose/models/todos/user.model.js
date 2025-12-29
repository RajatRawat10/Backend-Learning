import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  username: {
    type: String,
    reqiured: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    reqiured: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    reqiured: true,
  },
},{timestamps:true}
);

export const User = mongoose.model("User", Userschema);
