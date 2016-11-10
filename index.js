var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");

var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));


function randComps(module){
  var randIndex = Math.floor((Math.random() * module.length));
  var randInstance = module[randIndex];
  return randInstance;
}


app.get("/", function(req, res){
  var randCompliment = randComps(compliments);
  var randColor = randComps(colors);
  res.render("index.hbs", {compliment: randCompliment, color: randColor});
});


  app.listen(app.get("port"), function(){
    console.log("Start Complementing!");
  });
