var express = require("express");
var hbs = require("express-handlebars");
var compliments = require("./db/compliments.js")
var colors = require("./db/colors.js");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));

function getRandomItem(some_array){
  var randomIndex = Math.floor((Math.random() * some_array.length));
  var randomArrayItem = some_array[randomIndex];
  return randomArrayItem;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomItem(compliments);
  var randomColor = getRandomItem(colors);
  res.render("index.hbs", {
    compliment: randomCompliment,
    color: randomColor
  });
});

app.get("/:name", function(req, res){
  var randomCompliment = getRandomItem(compliments);
  var randomColor = getRandomItem(colors);
  var name = req.params.name;
  res.render("show.hbs", {
    compliment: randomCompliment,
    color: randomColor,
    name: name
  });
});

app.listen(3001, function(){
  console.log("I'm here!");
});
