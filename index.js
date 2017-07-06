compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]


colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

const express = require("express")
const app = express()


app.get("/", (req, res) => {
  let numCompliment = Math.floor(Math.random() * compliments.length);
  let numColor = Math.floor(Math.random() * colors.length);
  console.log(compliments[numCompliment]);
  console.log(colors[numColor]);
  document.body.background = "red";
  res.send(compliments[numCompliment])
})


app.listen(4000, () => {
  console.log("app listening on port 4000")
})
