const express = require("express");
require('dotenv').config()
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/profile", (req, res) => {
  res.send("<h1>Hello this is profile page!</h1>");
});
app.get("/user", (req, res) => {
  res.send("this is the user page!");
});
app.get("/about", (req, res) => {
  res.send("here you get to know about the site!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
