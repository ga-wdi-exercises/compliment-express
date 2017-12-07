const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")

var compliments = [
  'You look really nice today!',
  'You are doing great!',
  'The Force is strong with you!',
  'Your instructors love you!'
]

var colors = [
  '#FFBF00',
  '#0080FF',
  '#01DF3A',
  '#FF0080'
]

app.get("/", (req, res, next) => {
  let color = colors[Math.floor ( Math.random() * colors.length )]
  let compliment = compliments[Math.floor ( Math.random() * compliments.length )]
  res.render("index", {compliment, color})
})

app.get("/:name", (req, res) => {
  let name = req.params.name
  let color = colors[Math.floor ( Math.random() * colors.length )]
  let compliment = compliments[Math.floor ( Math.random() * compliments.length )]
  res.render("index", {compliment, color, name})
})

app.post("/", (req, res) => {
  compliments.push(req.body.comp)
  res.redirect("/")
})

app.listen(3001, () => {
  console.log("Up and running on 3001")
})
