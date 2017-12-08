const express = require("express")
const router = express.Router()

compliments = [
	"Your instructors love you",
	"High five = ^5",
	"Is it Ruby Tuesday yet?",
	"It's almost beer o'clock",
	"The Force is strong with you"
]
colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

router.get("/:name?", (req, res) => {
	let name = req.params.name

	let randColor = colors[Math.floor(Math.random() * colors.length)]

	let randCompliment =
		compliments[Math.floor(Math.random() * compliments.length)]

	res.render("index", {
		name: name,
		randCompliment: randCompliment,
		randColor: randColor
	})
})

router.post("/:name?", (req, res) => {
	compliments.push(req.body.compliment)

	res.redirect("back")
	// let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
	//
	// let randColor = colors[Math.floor(Math.random() * colors.length)]
	//
	// let randCompliment =
	// 	compliments[Math.floor(Math.random() * compliments.length)]
	//
	// let name = req.params.name
	//
	// res.render("index", {
	// 	name: name,
	// 	randCompliment: randCompliment,
	// 	randColor: randColor
	// })
})

module.exports = router
