var express = require("express");
var parser  = require("body-parser");
var app = express();

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true}))

var comps = [
  "Your instructors love you",
  "You're a great friend",
  "Cool shoes, dude",
  "No one can make you feel inferior without your consent",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/:name?", function(req, res){
  var name = req.params.name
  var comp = comps[Math.floor(Math.random() * comps.length)]
  var color = colors[Math.floor(Math.random() * colors.length)]
  res.render("index", {comp, color, name})
})

app.post("/", function(req, res){
  comps.push(req.body.comp)
  res.redirect("/")

})
