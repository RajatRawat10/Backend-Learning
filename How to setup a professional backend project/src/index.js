// require('dotenv').config({path: './.env'});   //this is the one way to do this

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectdb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongo db conection failed!!!", err);
  });


  
/*
// this is the first approach (isme hum sb ek he file m kr rhe h achi accproach h bs thoda file clutter ho gya )
import express from "express";
const app = express()(
  // this is how we connect database
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (errorr) => {
        console.log("ERRR", errorr);
        throw errorr;
      });
      app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR:", error);
      throw err;
    }
  }
)();
*/
