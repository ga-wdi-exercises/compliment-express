const express        = require('express')
const app = express()

app.set("view engine", "hbs")


app.get('/', (req, res) => {
  var compliments = [
    'Your instructors love you',
    'High five = ^5',
    'Is it Ruby Tuesday yet?',
    "It's almost beer o'clock",
    'The Force is strong with you'
  ]
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var randomColors = colors[Math.floor(Math.random() * colors.length)]

  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  res.render('index', {
    randomCompliment: randomCompliment,
    randomColors: randomColors
  })

})

app.get('/:name', (req, res) => {
  var compliments = [
    'Your instructors love you',
    'High five = ^5',
    'Is it Ruby Tuesday yet?',
    "It's almost beer o'clock",
    'The Force is strong with you'
  ]
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  var randomColors = colors[Math.floor(Math.random() * colors.length)]

  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
res.render('index', {
    name: req.params.name,
    randomCompliment: randomCompliment,
    randomColors: randomColors
  })
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
