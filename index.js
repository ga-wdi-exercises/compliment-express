const express = require('express')
const hbs = require('hbs')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

compliments = [
	'Your smile is contagious.',
	"You're a smart cookie.",
	'I bet you make babies smile.',
	'You have impeccable manners.',
	'I like your style.',
	'You have the best laugh.',
	'I appreciate you.',
	'You are the most perfect you there is.',
	'You are enough.',
	"You're strong.",
	'Your perspective is refreshing.',
	"You're an awesome friend.",
	'You light up the room.',
	'You deserve a hug right now.',
	'You should be proud of yourself.',
	"You're more helpful than you realize.",
	'You have a great sense of humor.',
	"You've got all the right moves!"
]
colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

app.get('/', (req, res) => {
	let compliment = compliments[Math.floor(Math.random() * compliments.length)]
	let color = colors[Math.floor(Math.random() * colors.length)]
	res.render('index', {
		compliment: compliment,
		color: color
	})
})
app.get('/:name?', (req, res) => {
	let compliment = compliments[Math.floor(Math.random() * compliments.length)]
	let color = colors[Math.floor(Math.random() * colors.length)]
	res.render('index', {
		compliment: compliment,
		color: color
	})
})
// app.post('/', (req, res) => {
// 	// res.send('hello' + req.params.name)
// 	// console.log(req.body)
// })
app.listen(3000, () => {
	console.log('app listening on port 3000')
})
