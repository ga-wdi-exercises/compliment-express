const express = require("express")
const app = express();

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	let compliments = [
	  "Your instructors love you",
	  "High five = ^5",
	  "Is it Ruby Tuesday yet?",
	  "It's almost beer o'clock",
	  "The Force is strong with you"
	]
	let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
	let compliment = compliments[Math.floor(Math.random()*compliments.length)]
	let color = colors[Math.floor(Math.random()*colors.length)]
	res.render("index", {compliment, color})
})

app.get('/:name', (req, res) => {
	res.send(`Hello ${req.params.name}`)
})

app.listen(4000, () => {
	console.log("whuddup")
})



