const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')

var compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

app.get('/', (req, res) => {
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  let next = compliments[Math.floor(Math.random() * compliments.length)]

  var colors = ['#fda339', '#57d6d4', '#ff5f60', '#a7db48']
  var randomColor = colors[Math.floor(Math.random() * colors.length)]
  res.render('index', {
    randomCompliment,
    next,
    colors,
    randomColor
  })
})

app.get('/:name', (req, res) => {
  let name = req.params.name
  res.render('show', {
    name
  })
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
  console.log('working properly')
})
