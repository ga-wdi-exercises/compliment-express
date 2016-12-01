var express = require("express");
var app = express();

app.listen(4000, () => {
  console.log("app listening on port 4000");
});


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function returnRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

app.get('/', (req, res) => {
  res.send(`<h1 style='background:${returnRandomItem(colors)}'>${returnRandomItem(compliments)}</h1>`)
})

app.get('/:name', (req, res) => {
  res.send(`<h1 style='background:${returnRandomItem(colors)}'>${req.params.name}, ${returnRandomItem(compliments)}</h1>`)
})
