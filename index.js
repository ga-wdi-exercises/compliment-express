var express = require("express")
var app = express()
var bodyParser = require("body-parser")

var compliments = [
  "If you were running for President, I'd vote for you. And clear your search history. Because Politics is a dirty business and they will dig that shit up. Don't worry I got you.",
  "You are not someone I pretend not to see in public."
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.use(bodyParser.json())
app.listen("2000", () => {
  console.log("Express is working")
})
app.get("/", (req, res) => {
  console.log(`${compliments}`)
  var randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  res.send(`${randCompliment}`)
  console.log(`${compliments}`)
})


// App now has express.
// when we enter "/" we display a compliment and color from .sample.
// so we need to define those arrays.
// res.send(complements.sample)?? and colors.sample needs to be styled.
