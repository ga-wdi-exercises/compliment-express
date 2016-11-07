var express = require("express")
var app = express()

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))

app.listen(8000, () => {
  console.log("CONNECTED ON port 8000")
})

app.get("/", (req, res) => {
  res.send("helloooooooo world")
})







let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
