var express = require("express");
var hbs = require("express-handlebars");

var app = express();

app.get("/", function(req, res){
  res.send("Welcome to emergency compliment generator!");
});

app.listen(3001, function(){
  console.log("Nodemon running");
});
