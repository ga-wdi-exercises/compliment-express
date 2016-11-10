var express = require("express")
var hbs = require("express-handlebars")

var app = express()

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function rObject(array) {
  return array[Math.floor(Math.random() * array.length)]
}

app.set("port", process.env.PORT || 3000)

app.set("view engine", "hbs")

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutDir: "views/",
  defaultLayout: "layout"
}))

app.get("/", function(req, res) {
  res.render("index.hbs", { compliment: rObject(compliments), color: rObject(colors)})
})

app.get("/:name", function(req, res) {
  res.render("name.hbs", { compliment: rObject(compliments), color: rObject(colors), name: req.params.name})
})

app.listen(app.get("port"), function() {
  console.log("Listening!")
})
