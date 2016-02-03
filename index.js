var express = require("express")
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment")
var colors = require("./models/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
  console.log(randomCompliment);
 //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well
});

app.get("/:name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var name = req.params.name;
  console.log(name);
  res.render("name.hbs",{compliment: randomCompliment, color: randomColor, name: name});
});

app.post("/:name/new", function(req, res){
  console.log("requessssst" + req);
  console.log("requessssst" + res);
  res.json();
});


app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
});
