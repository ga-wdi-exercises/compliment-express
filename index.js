let express = require("express");
let randomize = require("./randomize")
let app = express();
let bodyParser = require("body-parser")
let compliments = require("./models/compliments")
let colors = require("./models/colors")

// let compliments = [
//   "Your instructors love you",
//   "High five = ^5",
//   "Is it Ruby Tuesday yet?",
//   "It's almost beer o'clock",
//   "The Force is strong with you"
// ]
//
// let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.use(bodyParser.urlencoded({ extended: true}))

// app.get("/", (req, res) => {
//   randomColor = randomize.random(colors);
//   randomCompliment = randomize.random(compliments);
//   res.render("index", {randomColor, randomCompliment});
// })

app.get("/:name?", (req, res) => {
  randomColor = randomize.random(colors);
  randomCompliment = randomize.random(compliments);
  name = req.params.name
  res.render("index", {randomColor, randomCompliment, name});
})

app.post("/", (req, res) => {
  compliments.push(req.body.compliment)
  res.redirect("/")
})

app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
