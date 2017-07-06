var express = require("express");
var app = express();

var bodyParser = require('body-parser');

var compliments = require("./models/compliments")
var colors = require("./models/colors");

//took forever to remember, look up, or otherwise get all this stuff set
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

function randomCompliment(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

//level one because I know I can do that without breaking stuff
app.get("/", function(req, res){
  var randomCompliment = randomCompliment(compliments);
  var randomColor = randomCompliment(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});
