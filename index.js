var express = require("express");
var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get ("/", (req, res) =>{
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index", {compliment, color});
})

app.get ("/:name", (req, res) =>{
  compliment = compliments[Math.floor(Math.random() * compliments.length)],
  color = colors[Math.floor(Math.random() * colors.length)],
  name = req.params.name
  res.render("index", {compliment, color, name})
})



app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
