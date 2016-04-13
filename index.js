var express = require("express");
var hbs = require("express-handlebars");
var compliments = require("./models/compliments");

var randomNum = Math.floor(Math.random()*compliments.length);

var app = express();

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-compliment", {
    compliment: compliments[randomNum]
  });
}); // end get index

app.listen(3001, function(){
  console.log(randomNum);
}); //end app listen
