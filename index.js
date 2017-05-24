const express = require("express");
const app = express();

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "Mama didn't raise no trash",
  "You've got such nice eyes/lips/teeth/hair",
  "You're not like everyone else",
  "You look so handsome in that suit/tie/outfit",
  "Your arms look great in that shirt"
]


function getCompliments(array) {
  var randomIndex = Math.floor((Math.random() * array.length))
  var randomCompliment = array[randomIndex]
  return randomCompliment

}

app.get("/", (req, res) => {
  res.send("Cheer Up! -  " + getCompliments(compliments))
})


app.listen(4000, () => {
  console.log("app listening on port 4000")
})
