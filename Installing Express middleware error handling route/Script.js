const express = require("express");
const app = express();
// this is middle ware
app.use(function (req, res, next) {
  console.log("middleware chal gya");
  next();
});

// thid is response and request handling
app.get("/", (req, res) => {
  res.send("Hello World this is the first");
});

// this is how we make errorhandles
app.get("/profile", (req, res, next) => {
  return next(new Error("error aa gya "));
});
// this is how we make universal route
app.use((req, res) => {
  res.status(404).send("I am for all unavailable routes");
});

// writing error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
 