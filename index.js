var express = require("express");
var app = express();
var compliments = require("./models/compliments.js");
var colors      = require("./models/colors.js");

app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("IS IT WORKING?!?!?");
});

function randommize(module){
  var randomizedIndex = Math.floor(Math.random() * module.length);
  var randomizedInstance = module[randomizedIndex];
  return randomizedInstance;
}

app.get("/", (req, res) => {
  var randomCompliment = randommize(compliments);
  var randomColor = randommize(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});
