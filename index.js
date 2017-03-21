const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.set("view engine", "hbs")

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

// app.use(express.static(_dirname + '/public'))

app.get("/", (req,res) => {
  res.render("welcome")
});

app.get("/:name", (req, res) => {
  let name = req.params.name || "stranger";
  res.render("index") ;
});

app.post("/", (req, res) => {
  res.render("index", {
    name: req.body.name,
    compliment: compliments.random
  })
})

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});
