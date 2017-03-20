const express = require("express")
const app = express()

app.listen(4000)

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "You look pretty today, but only today",
  "Just remember, it could be worse, you could be dead"
]

let colors = ["#FFBF00","#0080FF","#01DF3A","#FF0080","#7929de","#fe3535"]

app.get("/", (req,res) => {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]
  res.render("index", {compliment, color})
})

app.get("/:name", (req,res) => {
  let name = req.params.name
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]
  res.render("index", {name, compliment, color})
})
