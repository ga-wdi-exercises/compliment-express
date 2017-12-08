const express = require("express")
const app = express()
const hbs = require("hbs")
const parser            = require('body-parser')
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.set("view engine", "hbs")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = [
  '#FFBF00',
  '#0080FF',
  '#01DF3A',
  '#FF0080'
]

app.get("/", (req, res) => {
  var color =colors[Math.floor(Math.random()*colors.length)]
  var compliment =compliments[Math.floor(Math.random()*compliments.length)]
  res.render("index", {
    color: color,
    compliment: compliment
  })
})

app.get("/:name", (req, res) => {
  let color = colors[Math.floor ( Math.random() * colors.length )]
  let compliment = compliments[Math.floor ( Math.random() * compliments.length )]
  let name = req.params.name
  res.render("index", {
    compliment: compliment,
    color: color,
    name
  })
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
