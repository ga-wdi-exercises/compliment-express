var express = require("express")
var app = express()

var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true})); // no idea what this does
app.use(bodyParser.json()); // no idea what this does

app.set("view engine", "hbs")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

// stole this solution :(
function getRandomStuff(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", function(req, res){
  var randomCompliment = getRandomStuff(compliments);
  var randomColor = getRandomStuff(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});


app.listen(3000, () => {
  console.log("3000")
})