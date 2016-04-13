var express = require("express");
var hbs = require("express-handlebars");
var compliments = require("./models/compliments");

var app = express();

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));

function randomCompliment(model){
  var randomNum = Math.floor(Math.random()*model.length);
  var randomCom = model[randomNum];
  return randomCom;
}

app.get("/", function(req, res){
  var randomCom = randomCompliment(compliments);
  res.render("app-compliment", {
    compliment: randomCom
  });
}); // end get index

app.listen(3001, function(){
  console.log("yay!");
}); //end app listen
