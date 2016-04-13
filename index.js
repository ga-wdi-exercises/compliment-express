var express = require("express");
var hbs = require("express-handlebars");

var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];


var compliment = function(){
  var randomNumber = Math.random();

  if (randomNumber < .2){
    return compliments[0]
  } else if (randomNumber < .4){
    return compliments[1]
  } else if (randomNumber < .6){
    return compliments[2]
  } else if (randomNumber < .8){
    return compliments[3]
  } else {
    return compliments[4]
  }
}

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname: "hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome", {
    compliment: compliment,
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
