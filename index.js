var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var colors = [ "#FFBF00", "#0080FF","#01DF3A","#FF0080" ]
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/");
});


app.get("/", function(req, res){
  var color = colors[Math.floor(Math.random() * colors.length)];
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  res.render("index.hbs", {compliment: compliment, color: color});
});

app.get("/:name", function(req, res){
  var color = colors[Math.floor(Math.random() * colors.length)];
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var name = req.params.name;
  res.render("name.hbs",{compliment: compliment, color: color, name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});
