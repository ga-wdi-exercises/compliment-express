var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var compliments = require("./models/compliment");
var colors = require("./models/color");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

//I DO NOT UNDERSTAND THE ABOVE FUNCTION

app.get("/", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
  // res.send("Welcome to emergency compliment!");
  // res.render("index", {compliments: randomCompliment, colors: randomColor})
});

// app.post("/", function(req, res){
//   res.send("hello " + req.body.user_name)
// })

app.get("/:user_name", function(req, res){
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var user_name = req.body.user_name;
  res.render("user_name.hbs", {compliment: randomCompliment, color: randomColor, user_name: user_name})
});

app.post("/:user_name/new", function(req, res){
  compliments.push(req.body.user_name);
  var user_name = req.body.user_name;
  res.redirect('/' + name);

  // res.render("index", {
  //   user_name: req.body.user_name,
  //   compliments: randomCompliment,
  //   colors: randomColor
});
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
