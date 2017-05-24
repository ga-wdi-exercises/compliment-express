const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

app.listen(4000, () => {
  console.log("app listeining on port 4000")
})

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  let user_name = req.body.user_name
  res.render("index", {user_name});
})

app.get("/:name", (req, res) => {
  let user_name = req.params.name
  let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
  ]
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  res.render("welcome", {user_name, randomColor, randomCompliment});
})
