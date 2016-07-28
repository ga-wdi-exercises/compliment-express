// We're using express
var express = require("express");
var app = express();

// Load a body parser module
var bodyParser = require('body-parser');

// Load the two files of colors and complimwnts
var compliments = require("./models/compliment")
var colors = require("./models/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

// Select a random compliment from the compliments module
function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

// If there's nothing more than / at the end of the URL
app.get("/", function(req, res){
  // Just return a random compliment in a random color
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

// If the url specifies a name
app.get("/:name", function(req, res){
  // Address the user by name, with a random compliment
  // in a random color
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});

// Add a new compliment to the database if the url ends in name/new
app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});

// Start listening on port 3000
app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/");
});
