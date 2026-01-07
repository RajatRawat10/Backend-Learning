import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userscheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudnary url
      required: true,
    },
    coverImage: {
      type: String, //cloudnary url
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: string,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: string,
    },
  },

  { timestamps: true }
);

userscheme.pre("save", function (next) {
  if(!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userscheme.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User", userscheme);
