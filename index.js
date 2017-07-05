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

function getRandomCompliments(module){
  var randomIndex = Math.floor((Math.random() * module.length));
  var randomInstance = module[randomIndex];
  return randomInstance;
}
app.get("/", (req, res) => {
  res.send(compliments.random)
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  res.render("index.hbs", {compliment: randomCompliment, color: randomColor});
})

app.get("/:name?", (req, res) => {
  res.send(`Hello ${req.params.name}`)
  var randomCompliment = getRandomCompliments(compliments);
  var randomColor = getRandomCompliments(colors);
  var name = req.params.name;
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
