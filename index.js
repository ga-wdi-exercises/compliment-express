const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

let compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

var capitalizeFirst = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

app.get('/:name?', (req, res) => {
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
  let name = capitalizeFirst(req.params.name || '')
  let colors = ['#fda339', '#57d6d4', '#ff5f60', '#a7db48']
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

  res.render('index', {
    randomCompliment,
    colors,
    randomColor,
    name
  })
})

app.post('/:name?', (req, res) => {
  compliments.push(req.body.newCompliment)
  res.redirect('back')
})

app.listen(3000, () => {
  console.log('working properly')
})
