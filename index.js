
// npm install --save express
// npm install --save hbs
const express = require("express")
const app = express()

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "You're gonna destroy today!",
  "It's almost beer thirty",
  "The Force is strong with you"
]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function randomThing(array) {
	return Math.floor(Math.random()*array.length)
}

// app.listen(4000,()=>{
// 	console.log("listening on port 4000")
// })

app.get("/",(req,res) => {
	res.send(`<body style="background:${colors[randomThing(colors)]};" >
				<h1>Greetings!</h1>
				<h2>${compliments[randomThing(compliments)]}</h2>
			</body>`)
})
app.get("/:name",(req,res) => {
	res.send(`<body style="background:${colors[randomThing(colors)]};" >
				<h1>Hi ${req.params.name}!</h1>
				<h2>${compliments[randomThing(compliments)]}</h2>
			</body>`)
})