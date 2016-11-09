var express = require("express");
var app = express();
var hbs = require("hbs")
var body-parser = require("body-parser")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs")
app.use(express.static("public"))

function RandomCompliments(){
    var randomComplimentIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomComplimentIndex];
  return randomInstance;
}

app.get("/", (req, res) => {
    var randomComp= RandomCompliments(compliments)
    var randomColor = RandomCompliments(colors)
    var name = req.params.name;
    res.render("index.hbs", {compliment: randomComp, color: randomColor, name: name})
})

app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/")
})
