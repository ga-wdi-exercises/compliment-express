var express = require("express")
var app = express()

var bodyParser = require("body-parser")

app.set("view engine", "hbs")


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.listen(3000, () => {
  console.log("3000")
})

app.get("/", (req, res) => {
  res.send(compliments)
})