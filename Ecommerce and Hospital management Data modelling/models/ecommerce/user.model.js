import { type } from "express/lib/response";
import mongoose from "mongoose";

//with time stamps we get created at and updated at
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      maxlenght: [50, "Name is too long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Please enter atleast 8 digit password"],
    },
    
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
// here model take two things first name of the model and second which  schema
