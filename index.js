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
app.use(express.static(__dirname + '/public'))

app.get("/:name?", (req, res) => {
  //getting that params is undefined?
  var compliment = compliments[Math.floor(Math.random()*compliments.length)]
  var background = colors[Math.floor(Math.random()*colors.length)]
  var name = req.params.name
  res.render("home", {
    compliment,
    background,
    name
  })
})


app.listen(3001, () => {
  console.log("alive");
})
