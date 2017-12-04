const express = require("express");
const hbs = require("hbs");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "hbs");
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

app.get("/:name?", (req, res, next) => {
  let name = req.params.name || "";
  let capital_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let compliment = compliments[Math.floor(Math.random() * 5)];
  let color = colors[Math.floor(Math.random() * 4)];
  res.render("index", {
    compliment: compliment,
    color: color,
    capital_name: capital_name
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
