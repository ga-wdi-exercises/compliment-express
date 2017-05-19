const express = require('express');
const app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))

app.listen(4000, () => {
  console.log('App listening on port 4000')
})

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

let random = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/", (req,res) => {
  let randomCompliment = random(compliments);
  let randomColor = random(colors);
  res.render("index", {randomCompliment, randomColor});
});

app.get("/:name", (req,res) => {
  let randomCompliment = random(compliments);
  let randomColor = random(colors);
  let name = req.params.name;

  res.render("personalized.hbs",{randomCompliment, randomColor, name})
})
