const express = require("express")
const app = express()

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

function emergencyRan(compliment) {
	return Math.floor(Math.random()*array.length)
}

app.listen(4000,() => {
	console.log("Port 4000. Emergency Compliments.")
})

app.get("/:name", (req,res) => {
	res.send(`<strong>${compliemnts[emergencyRan(compliments)]}</strong>`)
})