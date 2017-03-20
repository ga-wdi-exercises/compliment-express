const express = require('express');
const app = express();
app.set("view engine", "hbs");


let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]


let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get("/", (req, res) => {

  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  // res.send(console.log(compliment));
  let color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index", {compliment, color})
});


app.listen(4000, () => {
  console.log('listening on port 4000')
});
