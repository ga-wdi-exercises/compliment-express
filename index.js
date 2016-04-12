var express = require("express");
var app = express();
var hbs = require("express-handlebars");

var compliments = require("./models/compliment");
var colors = require("./models/color");

app.set("view engine", "hbs");
app.use("/assets", express.static("public"));

function giveCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/compliments", function(req, res){
  res.render("compliments-index", {
    compliments: db.compliments
  });
});

app.listen(3001, function(){
  console.log("It's aliive!");
});
