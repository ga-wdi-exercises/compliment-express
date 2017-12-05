const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')

compliments = [
	'Your instructors love you',
	'High five = ^5',
	'Is it Ruby Tuesday yet?',
	"It's almost beer o'clock",
	'The Force is strong with you'
]

colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

app.get('/:name?', (req, res) => {
	let n = Math.floor(Math.random() * compliments.length)
	let compliment = compliments[n]
	let bgColor = colors[Math.floor(Math.random() * colors.length)]
	let name = req.params.name || 'WDI 19'

	res.render('index', {
		compliment: compliment,
		bgColor: bgColor,
		name: name
	})
})

app.listen(3000, () => {
	console.log('listening on port 3000')
})
