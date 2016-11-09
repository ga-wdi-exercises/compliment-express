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

app.set("view engine", "hbs")
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send(compliments)
})

app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
