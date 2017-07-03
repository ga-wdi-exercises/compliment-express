const express = require("express")
const app = express()

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get("/", (req, res) => {
  var randomCompliment = Math.floor(Math.random() * compliments.length)
  var randomColor = Math.floor(Math.random() * colors.length)
  res.send(`<body style="background-color:${colors[randomColor]};">${compliments[randomCompliment]}</body>`)
})





app.listen(4000, () => {
  console.log("app listening on port 4000")
})
