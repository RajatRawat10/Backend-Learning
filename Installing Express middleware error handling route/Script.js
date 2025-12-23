import express from "express";
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
app.get("/profile", (req, res,next) => {
return next(new Error("error aa gya "));
});
// writing error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
