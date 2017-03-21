const express = require("express")
const app = express()

app.set("view engine", "hbs")

app.get("/", (req, res) => {
  let insults = [
    "I don't have the time or crayons to explain this to you",
    "You CSSuck at this",
    "Please rm -rf yourself from my presence"
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

  res.render("generic", {insult, colorOne, colorTwo})
})

app.get("/:name", (req, res) => {
  let insults = [
    "I don't have the time or crayons to explain this to you",
    "You CSSuck at this",
    "Please rm -rf yourself from my presence"
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

  let name = req.params.name

  res.render("personalized", {insult, colorOne, colorTwo, name})
})


app.get("/")
app.listen(3001, () => {
  console.log("You've merely stalled the demons");
})
