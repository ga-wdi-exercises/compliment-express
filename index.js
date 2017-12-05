const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

compliments = [
	'Your instructors love you',
	'High five = ^5',
	'Is it Ruby Tuesday yet?',
	"It's almost beer o'clock",
	'The Force is strong with you'
]

colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

let capitalize = function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

app.get('/:name?', (req, res) => {
	let compliment = compliments[Math.floor(Math.random() * compliments.length)]
	let bgColor = colors[Math.floor(Math.random() * colors.length)]
	let name = capitalize(req.params.name || '')

	res.render('index', {
		compliment: compliment,
		bgColor: bgColor,
		name: name
	})
})

app.post('/:name?', (req, res) => {
	compliments.push(req.body.new_compliment)
	res.redirect('back')
})

app.listen(3000, () => {
	console.log('listening on port 3000')
})
