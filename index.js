var express = require("express");
var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.listen(4000, function(){
  console.log("listening on 4000")
})

app.get("/", function(req, res){
  index = getRandomInt(0,5);
  res.send(compliments[index]);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
