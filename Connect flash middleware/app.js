const express = require("express");
const app = express();
const port = 3000;
// with connect flash we can save the data in the route and can use in the other route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
