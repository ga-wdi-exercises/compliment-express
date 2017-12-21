
const express = require('express')
const hbs     = require('hbs')
const parser  = require('body-parser')

const app = express()

app.listen(4010, () => {
  console.log('app listening on port 4010')
})

app.set('view engine', 'hbs')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

// compliment and color arrays
let compliment = [
    "Your instructors love you",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

let colors = [
    "#FFBF00",
    "#0080FF",
    "#01DF3A",
    "#FF0080"
  ]

function getRandomInt(lnth) {
  const min = 0
  const max = lnth-1
  return Math.floor(Math.random() * (max - min + 1)) + min
}

app.get('/', (req, res) => {
  let compIndex = getRandomInt(compliment.length)
  let comp = compliment[compIndex]
  let colorIndex = getRandomInt(colors.length - 1) 
  let color = colors[colorIndex]
  res.render('index', {comp, color})
})

app.get('/:visitor?', (req, res) => {
  let compIndex = getRandomInt(compliment.length)
  let comp = compliment[compIndex]
  let colorIndex = getRandomInt(colors.length - 1) 
  let color = colors[colorIndex]
  let visitor = req.params.visitor
  res.render('index', {comp, color, visitor})
})

app.post('/', (req, res) => {
  let visitor = req.params.visitor
  compliment.push(req.body.newComp)
  res.redirect(`/`)
})

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive!')
})
