const express = require("express")
const hbs = require("hbs")

const app = express()

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs")
// app.use(express.static(__dirname))

app.get("/", (req, res) => {
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  var randomColor = colors[Math.floor(Math.random() * colors.length)]
  res.render("index.hbs", {randomColor, randomCompliment})
})

app.listen(4000, _ => {
  console.log("Runing on port 4000")
})
