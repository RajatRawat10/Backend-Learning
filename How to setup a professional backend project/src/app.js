import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// this all use are middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// handling the json and url
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// routes import
import UserRouter from "./routes/user.route.js";


export { app };
