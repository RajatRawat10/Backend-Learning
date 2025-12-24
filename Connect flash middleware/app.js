const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

// with connect flash we can save the data in the route and can use in the other route
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"anything we can do here"
}));
app.use(flash());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
