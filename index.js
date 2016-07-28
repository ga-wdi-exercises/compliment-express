var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

var compliments =[
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors =  ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

Array.prototype.random = function(){
    return this[Math.floor(this.length * Math.random())]
}

app.get("/", function(req, res){
  res.render("index",{
    compliment: compliments.random(),
    color: colors.random()
  });
});
