const express = require("express")
const app = express()

app.set("view engine", "hbs")

app.get("/", (req, res) => {
  let insults = [
    "I don't have the time or crayons to explain this to you",
    "You CSSuck at this",
    "Please rm -rf yourself from my presence",
    "!Good-Job",
    "You're so DataBasic...",
    "Internet Explorer do this faster than you",
    "Back away from the Computer! If I needed a ProblemFactory I would have written one"
  ]

  let colors = [
    "rgb(255,0,0)",
    "rgb(255,127,0)",
    "rgb(255,255,0)",
    "rgb(127,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,127)",
    "rgb(0,255,255)",
    "rgb(0,127,255)",
    "rgb(0,0,255)",
    "rgb(127,0,255)",
    "rgb(255,0,255)",
    "rgb(255,0,127)"
  ]

  let insult = insults[Math.floor(Math.random() * insults.length)]
  let colorOne = colors[Math.floor(Math.random() * colors.length)]
  let colorTwo = colors[Math.floor(Math.random() * colors.length)]
  let colorThree = colors[Math.floor(Math.random() * colors.length)]

  res.render("generic", {insult, colorOne, colorTwo, colorThree})
})

app.get("/:name", (req, res) => {
  let insults = [
    "I don't have the time or crayons to explain this to you",
    "You CSSuck at this",
    "Please rm -rf yourself from my presence",
    "!Good-Job",
    "You're so DataBasic...",
    "Internet Explorer do this faster than you",
    "Back away from the Computer! If I needed a ProblemFactory I would have written one"
  ]

  let colors = [
    "rgb(255,0,0)",
    "rgb(255,127,0)",
    "rgb(255,255,0)",
    "rgb(127,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,127)",
    "rgb(0,255,255)",
    "rgb(0,127,255)",
    "rgb(0,0,255)",
    "rgb(127,0,255)",
    "rgb(255,0,255)",
    "rgb(255,0,127)"
  ]

  let insult = insults[Math.floor(Math.random() * insults.length)]
  let colorOne = colors[Math.floor(Math.random() * colors.length)]
  let colorTwo = colors[Math.floor(Math.random() * colors.length)]
  let colorThree = colors[Math.floor(Math.random() * colors.length)]

  let name = req.params.name

  res.render("personalized", {insult, colorOne, colorTwo, colorThree, name})
})


app.get("/")
app.listen(3001, () => {
  console.log("You've merely stalled the demons");
})
