var express = require("express");
var randomize = require("./randomize");
var app = express();
var bodyParser = require("body-parser");
var compliments = require("./models/compliments");
var colors = require("./models/colors");
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/:name?", (req, res) => {
  randColor = randomize.random(colors);
  randCompliment = randomize.random(compliments);
  name = req.params.name;
  res.render("index", {randColor, randCompliment, name});

});

app.post("/", (req, res) => {
  compliments.push(req.body.compliment);
  res.direct("/");
});

app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("homie we on");
});
