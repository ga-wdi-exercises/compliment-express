const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	let compliments = [
		"Your instructors love you",
		"High five = ^5",
		"Is it Ruby Tuesday yet?",
		"It's almost beer o'clock",
		"The Force is strong with you"
	]
	let colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

	var randColor = myArray[Math.floor(Math.random() * myArray.length)]

	var randComplimetn = myArray[Math.floor(Math.random() * myArray.length)]

	let bottles = req.params.num || 99
	let next = bottles - 1

	res.render("bottles/index", {
		bottles: bottles,
		next: next
	})
})

module.exports = router
