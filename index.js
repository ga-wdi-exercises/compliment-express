const express = require('express')
const app = express()

const parser = require('body-parser')

app.use(parser.urlencoded({extended: true}))

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

var colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080', '#008000', '#ffe4c4', '#dcdcdc', '#e6e6fa']

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  var index = Math.floor(Math.random() * 11)
  var colorIndex = Math.floor(Math.random() * 8)
  var randCompliment = compliments[index]
  var randColor = colors[colorIndex]
  res.render('index', {randCompliment, randColor})
})

app.get('/:name?', (req, res) => {
  var index = Math.floor(Math.random() * 11)
  var colorIndex = Math.floor(Math.random() * 8)
  var name = req.params.name

  var randCompliment = compliments[index]
  var randColor = colors[colorIndex]
  res.render('index', {randCompliment, randColor, name})
})

app.post('/', (req, res) => {
   compliments.push(req.body.newCompliment)
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
