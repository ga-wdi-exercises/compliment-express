var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.get("/", function(){
  res.send("Hello, World!");
});

app.listen(3001, function(){
  console.log("Look at me, I work!!!!");
});
