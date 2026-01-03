import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// this all use are middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
// handling the json and url 
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export { app };
