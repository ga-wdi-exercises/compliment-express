var express = require("express");
var app = express();
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.set("view engine", "hbs");
app.listen(4000, () => {
  console.log("app listening on port 4000");
});

function getRandom(module){
  var randomIndex = Math.floor(Math.random() * module.length);
  var randomInstance = module[randomIndex];
  return randomInstance;
}

app.get("/", (req, res) => {
  var randomCompliment = getRandom(compliments);
  var randomColor = getRandom(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
});
