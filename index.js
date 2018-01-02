const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// package from NPMJS. randomizes array.
const shuffle = require('shuffle-array')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// below require and before any routes
// tell Express to use bodyParser
// app.use(bodyParser.json()) //handles json post requests

// app.get("/", (request, response) => {
//   response.send("Hello World")
// })

const compliments = [
  "Be excellent to each other. Party on dudes!",
  "How can mirrors be real if our eyes arent real?",
  "I’m sorry for the things I said when Mercury was in Retrograde.",
  "Live Long and Prosper.",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

// var random = function(array) {    
//   // Function generates comments randomly. Source from Hangman attempt. 
//   let randomIndex = Math.floor(Math.random() * array.length)
//   return 
// }

// 'shuffle array' package usage from NPMJS.
app.get('/', (req, res) => {
   res.render({compliment: shuffle.pick(compliments), color: shuffle.pick(colors)})
 })



app.listen(4000, () => {
  console.log("app listening on port 4000")
})
