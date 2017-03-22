var express = require("express")
var app = express()
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.listen(3002,()=>{
  console.log("turbines to speed")
})

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function sample(input) {
  let length = input.length
  return input[Math.floor ( Math.random() * length )]
}

app.get("/", (req, res) => {
  let color = sample(colors)
  let compliment = sample(compliments)
  res.render("index", {compliment, color})
})

app.get("/:name", (req, res) => {
  let name = req.params.name
  let color = sample(colors)
  let compliment = sample(compliments)
  res.render("custom", {compliment, color, name})
})
