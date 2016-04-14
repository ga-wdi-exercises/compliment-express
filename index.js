var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.set("view engine", "hbs");

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

app.get("/", function(req,res){
  res.send(compliments);
});


app.listen(3001, function(){
  console.log("Houston we have lift off!");
});
