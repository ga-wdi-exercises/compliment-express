var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "Live long and Prosper",
  "I like your style!",
  "You're better than a triple-scoop ice cream cone. With sprinkles."
];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

app.get("/:name?", function(req, res){
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});

app.post("/:name/new", function(req, res){
  var name = req.params.name;
  compliments.push(req.body.name);
  res.redirect('/' + name);
});

app.listen(3000, function(){
  console.log("DAYMAN....FIGHTER OF THE NIGHTMAN!!! AHHH AHH AHHHH");
});
