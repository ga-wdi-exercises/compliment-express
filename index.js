
var express = require("express");
var app = express();
var bodyParser = require('body-parser')

var compliments = require("./model/compliment")
var colors = require("./model/color");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine","hbs");
app.use(express.static(__dirname + "/public"));

function colorPicker(){
  var color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color)
  return color
}

function getRandom(){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
   console.log(compliment)
   return compliment
}

app.get("/", function(req, res){
   var RandomCompliment = getRandom(compliments)
   var Randomcolor = colorPicker(colors)
   res.render("compliment.hbs", {compliment: RandomCompliment, color: Randomcolor})
   console.log("hello")
});




app.listen(4000, () => {
  console.log("app listening on port 4000");
});
