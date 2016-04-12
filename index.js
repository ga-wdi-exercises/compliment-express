var express = require("express");
var app = express();
var hbs = require("express-handlebars");
var db = require("./db/connection");

app.set("view engine", "hbs")
app.engine(".hbs", hbs ({
  extname: ".hbs",
  partialDir: "views/",
  layoutDir:"views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  for(var i = 0) 
  res.render("compliment-index");
});

app.listen(3001, function(){
  console.log("We are in business people!");
});
