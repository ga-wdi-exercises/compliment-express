var express = require("express");
var app = express();
app.set("view engine", "hbs");

var bodyParser = require("body-parser");
app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function randomize(array){
  return array[Math.floor(Math.random() * array.length)]
}

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.get("/:name?", (req, res) => {
  res.render("index", {
    compliment: randomize(compliments),
    color: randomize(colors),
    name: req.params.name
  })
})

app.post("/", (req, res) => {
  compliments.push(req.body.compliment_text)
  res.redirect('/')
})
