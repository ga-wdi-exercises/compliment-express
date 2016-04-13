var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  res.render("index.hbs", {compliment: randomCompliment});
});

app.get("/:name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var name = req.params.name;
  res.render("name.hbs",{compliment: randomCompliment, name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name);
  var name = req.params.name;
  res.redirect('/' + name);
});

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/");
});
