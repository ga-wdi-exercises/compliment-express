var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment")
var colors = require("./models/color");

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function getRandomCompliments(module){
  var randomCalculator = Math.floor((Math.random() * module.length));
  var randomResult = module[randomCalculator];
  return randomResult;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

app.get("/:name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});

app.listen(4000, function(){
  console.log("app listening at http://localhost:4000/");
});
