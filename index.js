var express = require("express");
var app = express();
// var bodyParser = require("body-parser");

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("app listening on port 4000");
})

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", (req, res) => {

  let selectCompliment = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[selectCompliment];

  let selectColor = Math.floor(Math.random() * colors.length);
  let randomColor = colors[selectColor];

  res.render("home", {randomCompliment, randomColor});
})
