var express = require("express");
var app = express();

app.set("view engine", "hbs");
app.listen(4000, () => {
  console.log("app listening on port 4000");
});
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var randomCompliment = compliments[Math.floor((Math.random() * compliments.length) + 1)]
  var randomColor = colors[Math.floor((Math.random() * colors.length) + 1)]

  // document.body.style.backgroundColor = randomColor; //I dont' understand why document is undefined here

  res.render("index", {randomCompliment});

});
