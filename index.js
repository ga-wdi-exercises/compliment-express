var express = require("express");
var hbs     = require("express-handlebars");
 
 var app     = express();

 var compliments = [
   "Your instructors love you",
   "High five = ^5",
   "Is it Ruby Tuesday yet?",
   "It's almost beer o'clock",
   "The Force is strong with you"
 ];

 var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

 app.set("view engine", "hbs");
  app.engine(".hbs", hbs({
    extname:        ".hbs",
    partialsDir:    "views/",
    layoutsDir:     "views/",
    defaultLayout:  "layout-main"
  }));
  
 
 app.get("/", function(req, res){
   res.render("app-welcome", {
   	comps : compliments[1]
   })
 });
 
 app.listen(3001, function(){
   console.log("It's aliiive!");
 });