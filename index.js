const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

let compliments = [
	  "Your instructors love you",
	  "High five = ^5",
	  "Is it Ruby Tuesday yet?",
	  "It's almost beer o'clock",
	  "The Force is strong with you"
	]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get('/', (req, res) => {
	let compliment = compliments[Math.floor(Math.random()*compliments.length)]
	let color = colors[Math.floor(Math.random()*colors.length)]
	res.render("index", {compliment, color})
})

app.get('/:name', (req, res) => {
	
	let compliment = compliments[Math.floor(Math.random()*compliments.length)]
	let color = colors[Math.floor(Math.random()*colors.length)]
	let name = req.params.name
	res.render("index", {compliment, color, name})
})

app.post('/', (req, res) => {
	if (compliments[compliments.length - 1] != req.body.userCompliment) {
		compliments.push(req.body.userCompliment)
	}

	let compliment = compliments[Math.floor(Math.random()*compliments.length)]
	let color = colors[Math.floor(Math.random()*colors.length)]
	res.render("index", {compliment, color})
})

app.listen(4000, () => {
	console.log("whuddup")
})



