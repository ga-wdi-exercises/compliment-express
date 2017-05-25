
const express = require("express");
const app = express();
app.set("view engine","hbs");
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = [
  "#FFBF00",
  "#0080FF",
  "#01DF3A",
  "#FF0080"
]

function randomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var item = array[randomIndex]
  return item
}

app.get("/", function(req, res) {
  var randomCompliment = randomItem(compliments)
  var randomColor = randomItem(colors)
  res.render("index", {compliment: randomCompliment, color: randomColor})
})

app.get("/:name", function(req, res){
  var randomCompliment = RandomNumber(compliments);
  var randomColor = RandomNumber(colors);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});
app.listen(4000, () => {
  console.log("app listening on port 4000");
});
