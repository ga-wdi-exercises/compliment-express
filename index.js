const express = require("express")
const app = express()

/* app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  })
 */
const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  
const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
const randomNumber = function () {
    return Math.floor(Math.random() * 5)
  }
const background = `background-color:${colors[randomNumber()]}`  


app.get('/', (req, res) => {
    res.send(compliments[1])
})
  










app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  