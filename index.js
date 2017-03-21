
const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



var express = require("express");
var app = express();


app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:name?", (req, res) => {
  var color = colors[Math.floor(Math.random()*colors.length)]
  body.style.backgroundColor = color;

  res.send(`Hello ${req.params.name}`);
});
