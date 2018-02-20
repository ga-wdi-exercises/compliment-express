const express = require('express')
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')

const compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]
const randomNumber = function () {
  return Math.floor(Math.random() * 5)
}

const colors = ['red', 'blue', 'green', 'gold', 'lime']
const background = `background-color:${colors[randomNumber()]}`

app.get('/', (req, res) => {
  res.render('welcome', {
    compliment: compliments[randomNumber()],
    background: background
  })
})

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}! ${compliments[randomNumber()]} <body style=background-color:${colors[randomNumber()]}></body>`)
  })

app.post('/', (req, res) => {
  res.render('index', {
    user_compliment: req.body.user_compliment
  })
  compliments.push(req.body.user_compliment)
})

app.listen('4000', () => {
  console.log('listening on port 4000')
})
