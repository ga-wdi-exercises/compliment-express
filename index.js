const express = require("express");
const hbs = require("hbs");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "hbs");
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

app.get("/:name?", (req, res, next) => {
  let name = req.params.name || "";
  let capital_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index", {
    compliment: compliment,
    color: color,
    capital_name: capital_name
  });
});

app.post("/:name?", (req, res, next) => {
  compliments.push(req.body.new_compliment);
  res.redirect("/" + req.params.name);
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
