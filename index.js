const express = require('express')
const app = express()
const parser  = require('body-parser')
const hbs = require('express-handlebars')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))



let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function getRand(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

app.get('/', (req, res) => {
  let compliment = getRand(compliments)
  let color = getRand(colors)
  res.render('index.hbs', {compliment, color})
})

app.get('/:name', (req, res) => {
  let compliment = getRand(compliments)
  let color = getRand(colors)
  let name = req.params.name
  res.render('greeting.hbs', {compliment, color, name})
})

app.post('/:name/new', (req, res) => {
  compliments.push(req.body.name)
  let name = req.params.name
  res.redirect('/' + name)
})

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
