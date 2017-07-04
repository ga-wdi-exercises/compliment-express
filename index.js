const express = require("express")
const app = express()

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer thirty",
  "The Force is strong with you"
]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function randomThing(array) {
	return Math.floor(Math.random()*array.length)
}

app.listen(4000,()=>{
	console.log("listening on port 4000")
})
app.get("/:name",(req,res) => {
	res.send(`<h1>${compliments[randomThing(compliments)]}</h1>`)
})