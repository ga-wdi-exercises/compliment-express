const express = require("express");
const hbs = require("hbs");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

app.set("view engine", "hbs");

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

app.get("/", (request, response) => {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  response.render("index", {
    color: color,
    compliment: compliment
  });
});

app.get("/:name", (req, res) => {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  let name = req.params.name;
  res.render("name", {
    color: color,
    compliment: compliment,
    name
  });
});

app.post("/", (req, res) => {
  compliments.push(req.body.add_compliment);
  res.render("index");
});

app.post("/:name", (req, res) => {
  compliments.push(req.body.add_compliment);
  res.render(`/${req.params.name}`);
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
