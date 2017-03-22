const express = require("express");
const parser = require("body-parser")
const app = express();

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))


let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.listen(3001, () =>{
  console.log("express started on port 3001")
})
