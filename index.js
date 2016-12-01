var express = require("express");
var app = express();
app.use(express.static('/public'))
app.set("view engine", "hbs");

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  res.render("index");
});
