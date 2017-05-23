let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("port 3000 is workin ")
});

app.get("/", (req, res) => {
  res.render("players.hbs")
})
app.get("/:name", (req, res) => {
  let randColor = colors[Math.floor(Math.random() * colors.length)];
  let randCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  res.render("index.hbs", {
    compliment: randCompliment,
    color: randColor,
    player: name
  });
})

app.post("/", (req, res) => {
   name = (req.body.player_name)
  res.redirect('/' + name);
  res.render("index.hbs", {
    player: name
  })
})
