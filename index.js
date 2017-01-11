var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

app.get("/", (req, res) => {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  var randomComplimentIndex = Math.floor((Math.random() * compliments.length) + 1);

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  var randomColorIndex = Math.floor((Math.random() * colors.length - 1) + 1);
  res.send(`<body style="background-color: ${colors[randomColorIndex]};"><h1>Welcome to the Ultimate Compliment!</h1><h3>${compliments[randomComplimentIndex- 1]}</h3></body>`);
});

app.get("/:name", (req, res) => {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  var randomComplimentIndex = Math.floor((Math.random() * compliments.length - 1) + 1);

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  var randomColorIndex = Math.floor((Math.random() * colors.length - 1) + 1);
  var name = req.params.name;
  res.send(`<body style="background-color: ${colors[randomColorIndex]};"><h1>Welcome to the Ultimate Compliment, ${name}!</h1><h3>${compliments[randomComplimentIndex]}</h3></body`);
});
