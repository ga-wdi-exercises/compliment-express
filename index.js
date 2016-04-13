var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.get("/", function(req,res){
  res.send("Hello World");
});

app.listen(3001, function(){
  console.log("Houston we have lift off!");
});
