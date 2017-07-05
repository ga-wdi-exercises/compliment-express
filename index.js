const express = require("express")
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"));

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", (req, res) => {
  res.send(compliments.random)
  var randCompliment = getRandCompliments(compliments);
  var randColor = getRandCompliments(colors);
  res.render("index.hbs", {compliment: randCompliment, color: randColor});
})

app.get("/:name?", (req, res) => {
  res.send(`Hello ${req.params.name}`)
  var randCompliment = getRandCompliments(compliments);
  var randColor = getRandCompliments(colors);
  var name = req.params.name;
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
