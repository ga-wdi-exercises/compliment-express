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


app.listen(4000, () => {
  console.log("app listening on port 4000");
});
