const express = require("express")
const app = express()

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]


app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.get("/", (req,res) => {
  res.send("Your instructors love you")
})
