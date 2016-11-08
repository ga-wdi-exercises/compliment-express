var express = require("express")
var app = express()
var bodyParser = require("body-parser");

var compliments = [
  "It's almost wine o'clock",
  "Can I borrow 5 dollars?",
  "Your mom smells nice",
  "you make me feel like a natural woman",
  "You are nothing less than special",
  "I get hungry when I see your smile",
  "You Like Pokemon so duh you're awesome",
  "I like the way you type",
  "I enjoy deciding where to eat with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#FF99C8", "#FCF6BD", "#E4C1F9", "#B5FED9", "#15E6CD", "#587291", "#A61C3C", "#92BFB1", "#DAD6D6"]

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions
app.set("view engine", "hbs")
app.listen(3000, () => {
  console.log("app is working like whoa");
})

app.get("/", (req, res) => {
  var randCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  var randColors = colors[Math.floor(Math.random() * colors.length)]
  res.render("index", {color: randColors, compliment: randCompliment})
})

app.post("/", (req, res) => {
  compliments.push(req.body.compliment)
  res.send("You added the compliment: " + req.body.compliment)
})

app.get("/:name", (req, res) => {
    var name = req.params.name
    var randCompliment = compliments[Math.floor(Math.random() * compliments.length)]
    var randColors = colors[Math.floor(Math.random() * colors.length)]
    res.render("name", {name: name, color: randColors, compliment: randCompliment})
})
