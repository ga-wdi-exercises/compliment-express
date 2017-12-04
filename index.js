const express = require('express')

const app = express()

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["fda339", "57d6d4", "ff5f60", "a7db48"]

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(3000, () => {
  console.log
})
