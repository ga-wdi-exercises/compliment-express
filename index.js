const express = require('express')
const app = express()

var compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you',
  'People enjoy you accidentlally touching their butt while putting on your seat-belt',
  'Your ex thought about you this morning, then they thought about donuts',
  'Your principal would call you to the office just to look cool',
  'Everyone at the laundromat thinks you have the cutest underwear',
  'You rarely have to go to the bathroom when you fly in the window seat',
  'You are freakishly good at thumb wars'
]

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  var index = Math.floor(Math.random() * 11)
  var randCompliment = compliments[index]
  res.render('index', {randCompliment})
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
