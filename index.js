var express = require("express");
var app = express();
var hbs = require("hbs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));﻿

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  randColor = colors [Math.floor(Math.random() * colors.length)]
  res.render("index", {
    randCompliment,
    randColor
  });
 });
 

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
