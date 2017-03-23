var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('view engine', 'hbs'

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:name?", (req, res) => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  let name = req.params.name

res.render("show", {
  name,
  randomColor,
  randomCompliment
})
});

app.post("/compliments", (req,res) => {
compliments.push(req.body.compliment)
res.redirect("/")
})

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
