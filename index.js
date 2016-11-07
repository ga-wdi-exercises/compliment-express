var express = require("express");
var app = express();

var compliment = [
  "You can do it",
  "You are almsot there",
  "I believe in you"
]

var color = [ "#FFBF00", "#0080FF","#01DF3A","#FF0080"
]

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  var compliments = compliment[(Math.floor(Math.random()*3))]
  res.send(`Hello, ${compliments}`)
  var colors = color[(Math.floor(Math.random()*4))]
  res.render("index")
})

app.get("/:name", (req, res) => {
  var compliments = compliment[(Math.floor(Math.random()*3))]
  res.send(`Hello, ${req.params.name}, ${compliments}`)

})
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
