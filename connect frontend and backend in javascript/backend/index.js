import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("this is the server !!!");
});
app.get("/api/jokes", function (req, res) {
  const jokes = [
    {
      id: 1,
      title: "Programmer Problem",
      joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 2,
      title: "JavaScript Life",
      joke: "Why did the JavaScript developer go broke? Because he kept using console.log instead of saving.",
    },
    {
      id: 3,
      title: "Backend Reality",
      joke: "Backend developers don’t sleep — they just wait for the server to respond.",
    },
    {
      id: 4,
      title: "Bug Fix",
      joke: "I fixed a bug by adding more bugs. Now it’s a feature.",
    },
    {
      id: 5,
      title: "Code Review",
      joke: "Code works? Don’t touch it. Code doesn’t work? Don’t touch it.",
    },
    {
      id: 6,
      title: "Deployment Day",
      joke: "It worked on my machine, so I deployed it and blamed the server.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at the ${port}`);
});