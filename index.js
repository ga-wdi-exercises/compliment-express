const express = require("express")
const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const complimentsController = require("./controllers/complimentsController")
// console.log(complimentsController)

app.set("view engine", "hbs")

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", (req, res) => {
  console.log("hello")
  var selectComplimemnt = function(){

// change 4 to compliments.length
    var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  res.send(`randomCompliment`)
//   }
});




app.listen(4000, () => {
  console.log("app listening on port 4000")
})
