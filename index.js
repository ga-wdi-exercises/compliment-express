var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment")
var colors = require("./models/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

function randomThisThing(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var randomCompliment = randomThisThing(compliments);
  var randomColor = randomThisThing(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});

app.listen(3001, function(){
  console.log("app on at 3001");
});
