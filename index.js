var express = require("express");
var app = express();
app.set("view engine", "hbs")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function randomize(array){
  return array[Math.floor(Math.random() * array.length)]
}

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.get("/", (req, res) => {
  res.render("index", {
    compliment: randomize(compliments),
    color: randomize(colors)
  })
})
