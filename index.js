var express = require("express");
var app = express()
var compliments = require("./models/compliments")
var colors = require("./models/colors")
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));//handles form submission object literal key extended value true
// app.use(bodyParser.json());  //handles json post requests
app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

function getRandom(module){
  var length = module.length
  var randomI = Math.floor(Math.random() * length);
  var random = module[randomI];
  return random;
}

app.get("/",function(req , res){
  var randomCompliment = getRandom(compliments);
  var randomColor = getRandom(colors);
  res.render("index.hbs", {color: randomColor, compliment: randomCompliment});
});

app.get("/:name",function(req , res){
  var randomCompliment = getRandom(compliments);
  var randomColor = getRandom(colors);
  var name = req.params.name;
  res.render("new.hbs", {color: randomColor, compliment: randomCompliment,name: name});
});

app.post("/:name/new", function(req, res){
  compliments.push(req.body.name)
  var name = req.params.name
  res.redirect('/' + name);
});


  //display a generic greeting and a randomly chosen complement and bkgrnd color


app.listen(3030, function(){
  console.log("app listening at http://localhost:3030")
})
