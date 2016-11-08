var express = require("express")
var app = express()
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs")
app.listen(3000, () => {
  console.log("app is working like whoa");
})

app.get("/", (req, res) => {
  var greeting = "Whats up?"
  var randCompliment = compliments[Math.floor(Math.random() * 5)]
  var randColors = colors[Math.floor(Math.random() * 4)]
  res.render("index", {color: randColors, compliment: randCompliment})
})



app.get("/:name", (req, res) => {
  res.send(`hey, ${req.params.name} don't give up`)
})
