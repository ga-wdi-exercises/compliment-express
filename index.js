const express = require('express')
const app = express()

var compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  var index = Math.floor(Math.random() * 5)
  var randCompliment = compliments[index]
  res.render('index', {randCompliment})
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
