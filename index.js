const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

let compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

let colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']
// let compliment = compliments[Math.floor(Math.random() * compliments.length)]
// let color = colors[Math.floor(Math.random() * colors.length)]



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

app.post('/', (req, res) => {
  compliments.push(req.body.anotherCompliment), res.redirect('/')
})

app.listen(4000, () => {
  console.log('app listening on port 4000')
})
