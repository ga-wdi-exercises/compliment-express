// index.js

// Modules & dependencies
var express = require("express")
var bodyParser = require("body-parser")



// Init app
var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.set("view engine", "hbs")



// Data
var compliments = [
  "At least two friends are going to name their child and/or goldfish after you.",
  "People behind you at movies think you are the perfect height.",
  "You are your parent's greatest accomplishment, unless they invented the \"spork\".",
  "Your allergies are some of the least embarrassing allergies.",
  "The Force is strong with you.",
  "Someone almost got a tattoo of your name once, but their mom talked them out of it."
]

var colors = [
  "#5D9CEC",
  "#4FC1E9",
  "#48CFAD",
  "#A0D468",
  "#FFCE54",
  "#FC6E51",
  "#ED5565",
  "#AC92EC",
  "#EC87C0"
]



// Routes
app.get("/", (req, res) => {
  let compliment = compliments[Math.floor((Math.random() * compliments.length))]
  let color = colors[Math.floor((Math.random() * colors.length))]
  res.render("index.hbs", {compliment: compliment, color: color})
})



// Server
app.listen(4000, () => {
  console.log("app listening on port 4000")
})
