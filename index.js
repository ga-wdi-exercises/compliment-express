const express = require("express")
const app = express()
const bParser = require("body-parser")

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

app.set("view engine", "hbs")

app.use(bParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index", {
    compliment: random(compliments),
    color: random(colors),
    alert: null
  })
})

app.get("/:name", (req, res) => {
  res.render("index", {
    name: req.params.name[0].toUpperCase() + req.params.name.slice(1),
    compliment: random(compliments),
    color: random(colors),
    alert: null
  })
})

app.post(
  "/",
  (req, res, next) => {
    compliments.push(req.body.compliment)
    next()
  },
  (req, res) => {
    res.render("index", {
      compliment: random(compliments),
      color: random(colors),
      alert: "Compliment added"
    })
  }
)

app.listen(3000, () => {
  console.log("listening on port 3000")
})
