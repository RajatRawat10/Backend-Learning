import mongoose from "mongoose";
import { DB_NAME } from "./constant";







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