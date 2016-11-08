var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var compliment = [
  "You can do it",
  "You are almsot there",
  "I believe in you"
]

var color = [ "#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  var colors = color[(Math.floor(Math.random()*4))]
  var compliments = compliment[(Math.floor(Math.random()*3))]
  res.render("index", {color: colors, compliment: compliments})
  // res.send(`Hello, ${compliments}`)
})

app.get("/:name", (req, res) => {
  var compliments = compliment[(Math.floor(Math.random()*3))]
  res.send(`Hello, ${req.params.name}, ${compliments}`)

})
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
