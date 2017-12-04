const express           = require('express')
const hbs               = require('hbs')
const app               = express()
const bodyParser        = require('body-parser')
const log               = require('simple-node-logger').createSimpleLogger();

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/:name?', (req,res) => {
  let name = req.params.name || 'human'
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]

  res.render('index', {
    name: name,
    compliment: compliment,
    color: color
  })
})

app.post('/:name?', (req,res,next) => {
  compliments.push(req.body.compliment)
  res.redirect(`/${req.params.name}`);
})

app.listen(3000, ()=> {
  console.log("app listening on port 3000")
})
