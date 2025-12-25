import express from "express";
const app = express();

app.get("/", function (req, res) {
res.send("this is the server !!!")
});

const port= process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`serve at the ${port}`)
}
)