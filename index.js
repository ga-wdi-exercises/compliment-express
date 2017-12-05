const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')

let compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

app.get('/:name?', (req, res) => {
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  let next = compliments[Math.floor(Math.random() * compliments.length)]
  if (req.params.name) {
    let name = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1)
  }
  let colors = ['#fda339', '#57d6d4', '#ff5f60', '#a7db48']
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  res.render('index', {
    randomCompliment,
    next,
    colors,
    randomColor,
    if (name) {
      name
    }
  })
})

app.listen(3000, () => {
  console.log('working properly')
})
