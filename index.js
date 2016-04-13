var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./db/connection");

var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));

var compliments =
[
  "It's a free-happy-hour-at-GA-on-Friday-after-project-week party... and you're invited",
  "You got this, you perfect human, you",
  "You've got eyes like a Ruby gem",
  "Oprah called to say, 'you're getting a car!'",
  "The Force is strong with your friend's mom. Oh, and also with you!"
];

function chooseRandom(array){
  var randomized = array[Math.floor(Math.random() * array.length)];
  return randomized;
}

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.get("/compliment", function(req, res){
  var randomCompliment = chooseRandom(db.compliments);
  res.render("compliment-index", {
    compliment: randomCompliment
  });
});

app.get("/compliment/:name", function(req, res){
  res.render("compliment-name", {
    name: req.params.name,
    compliment: randomCompliment
  });
});

app.listen(3001, function(){
  console.log("it's aliiiiive!");
});
