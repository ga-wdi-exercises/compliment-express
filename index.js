var express = require("express");
var app = express();

var compliment = require("./models/compliment.js");
var color = require("./models/colors.js");

app.set("view engine", "hbs");


function random (module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var pickedCompliment = random(compliment);
  var pickedColor = random(color)
  res.render("index.hbs", {compliment: pickedCompliment, color: pickedColor});
})

app.get("/:name", function(req, res){
  var pickedCompliment = random(compliment);
  var pickedColor = random(color)
  var name = req.params.name;
  res.render("personalized.hbs", {compliment: pickedCompliment, color: pickedColor, name: name})
})



app.listen(4000, function(){
  console.log("app is listening")
})
