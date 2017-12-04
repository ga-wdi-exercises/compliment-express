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

app.get('/', (req, res) => {
	let n = Math.floor(Math.random() * compliments.length)
	let compliment = compliments[n]
	// res.send(compliments[n])
	res.render('index', {
		compliment: compliment
	})
})

app.listen(3000, () => {
	console.log('listening on port 3000')
})
