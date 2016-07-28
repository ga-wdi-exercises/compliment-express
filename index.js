var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var compliments = require("./models/compliment");
var colors = require("./models/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))

function genCompliments(module) {
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function( req, res ){
  var randomComp = getRandomComp (compliments);
  var randomColor = getRandomComp(colors);
  res.render("index.libs", {compliment: randomComp, color: randomColor});
 //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well
});

app.post("/name:new", function (req, res) {
  compliments.push(req.body.name);
  var name =req.params.name;
  res.redirect('/' + name);

});

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
