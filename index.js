const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["fda339", "57d6d4", "ff5f60", "a7db48"]

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log
})
