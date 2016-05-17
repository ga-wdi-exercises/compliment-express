var express = require("express");
var hbs     = require("express-handlebars");
var app     = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  res.render("index", {
    randomCompliment: getRandomCompliment(),
    randomColor: getRandomBgColor()
  });
});

app.get("/:name", function(req, res){
  res.render("index", {
    randomCompliment: getRandomBgColor(),
    randomColor: getRandomCompliment(),
    urlInput: req.params.name
  });
});

app.listen(app.get("port"), function(){
  console.log("Running on port: " + app.get("port"));
});

function getRandomCompliment(){
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  var randomComplimentIndex = Math.floor( Math.random() * compliments.length );
  var randomCompliment = compliments[randomComplimentIndex];
  return randomCompliment;
}

// i didn't really need to conduct this "experiment" to obtain the expected result
// that a complete-sentence naming-convention for variables
// is a ridiculous idea
function getRandomBgColor(){
  var beholdThisLovelyArrayOfColors =
    ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  var hereIsTheIndexForTheRandomColor = Math.floor(
    Math.random() * beholdThisLovelyArrayOfColors.length);
  var thisOneIsTheRandomColor =
    beholdThisLovelyArrayOfColors[hereIsTheIndexForTheRandomColor];
  return thisOneIsTheRandomColor;
}
