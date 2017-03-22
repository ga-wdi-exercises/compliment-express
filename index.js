const express = require("express");
const bodyParser = require("body-parser");
// const compliment = require("./compliment.js");

const app = express();

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

compliments = [
  "You are smarter than you think",
  "You have a beautiful spirit",
  "You are getting better at javascript",
  "remember when you knew nothing? Look how far, you've come!"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", function (req, res) {

 let compliment = compliments[Math.floor(Math.random() * compliments.length)];
 let color = colors[Math.floor(Math.random() * colors.length)];
 res.render("index", {compliment, color})
})

app.get("/:name", function (req, res){
  let name = req.params.name;
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];
  let color = colors[Math.floor(Math.random() * colors.length)];
  res.render("show", {name, compliment, color})
})

app.post("/:name/new", function (req, res){
  let name = req.params.name;
  compliments.push(req.body.complimentNew)
  res.redirect("show")
})

app.listen(4000, () => {
  console.log("app listening on port 4000");
})
