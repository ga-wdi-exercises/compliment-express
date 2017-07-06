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
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set("view engine", "hbs")

app.get("/", complimentsController.index)

app.get("/:name?", complimentsController.index)


app.listen(4000, () => {
  console.log("app listening on port 4000")
})
