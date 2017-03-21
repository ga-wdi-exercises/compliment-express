const express = require("express");
const app = express();

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
compliment = compliments[Math.floor(Math.random() * compliments.length)];
console.log(compliment)

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

color = colors[Math.floor(Math.random() * colors.length)];

console.log(color)

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(4000, () => {
  console.log("app listening on port 4000");
});
