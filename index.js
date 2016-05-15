var express = require("express");
var express = require("express-handlebars");

var app = express();

app.get("/compliment", function(req, res){
  res.render("compliment-welcome");
});

app.listen(3001, function(){
  console.log("It's Aliiiiiive!");
});
