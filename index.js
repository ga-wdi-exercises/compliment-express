var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment")
var colors = require("./models/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randIndex = Math.floor((Math.random() * module.length));
  var randInstance = module[randIndex];
  return randInstance;
}

app.get("/", function(req, res){
  var randCompliment = getRandomCompliments(compliments);
  var randColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randCompliment, color: randColor});
});

app.get("/:name", function(req, res){
  var randCompliment = getRandomCompliments(compliments);
  var randColor = getRandomCompliments(colors);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randCompliment, color: randColor, name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/");
});
