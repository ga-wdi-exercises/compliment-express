var express = require('express')
var bodyParser = require('body-parser')
var compliments = require('./compliments.js')
var app = express()
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.set('view engine', 'hbs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))
app.get('/:name?', (req, res) => {
  var name = req.params.name? req.params.name : ''
  var color = colors[Math.floor(Math.random() * colors.length)]
  var compliment = compliments[Math.floor(Math.random() * compliments.length)]
  res.render('index', {compliment, color, name})
})

app.post('/:name?', (req, res) => {
  var name = req.params.name? req.params.name : ''
  var newCompliment = req.body.compliment
  compliments.push(newCompliment)
  res.redirect('/' + name)
})


app.listen(3000, () => {
  console.log('app listening on http://localhost:3000')
})
