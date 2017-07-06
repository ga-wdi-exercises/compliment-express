const express = require("express")
const app = express()
const complimentsCont = require("./controllers/complimentsController.js")

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get("/", complimentsCont.index)
app.get("/:name?", complimentsCont.name)
// => {
  // var compliment = compliments[Math.floor(Math.random()*compliments.length)];
  // var color = colors[Math.floor(Math.random()*colors.length)];
  // res.render("index", {
  //   compliment: compliment,
  //   color: color});
// })

// app.get("/:numberOfBottles?", bottles.index )
// app.get("/:name", ( req, res ) => {
//   var compliment = compliments[Math.floor(Math.random()*compliments.length)];
//   var color = colors[Math.floor(Math.random()*colors.length)];
//   let name = req.params.name
//
//   res.render("name.hbs",{
//     compliment: randomCompliment,
//     color: randomColor,
//     name: name});
// })



app.listen(4000, () => {
  console.log("app listening on port 4000")
})
