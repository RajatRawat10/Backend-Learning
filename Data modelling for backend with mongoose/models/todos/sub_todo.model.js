import mongoose from "mongoose";

const Userschema = new mongoose.Schema({});

export const User = mongoose.model("User", Userschema);
