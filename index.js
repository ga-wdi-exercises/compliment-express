
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.json()) // handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.listen(4010, () => {
  console.log('app listening on port 4010')
})

complement = [
    "Your instructors love you",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

colors = [
    "#FFBF00", 
    "#0080FF",
    "#01DF3A",
    "#FF0080"]


app.get('/', (req, res) => {
  let compIndex = getRandomInt()
  let comp = complement[compIndex]
  let pageColor = colors[compIndex]
  res.render('index', {comp, pageColor})
})

function getRandomInt() {
    const min = 0
    const max = 3
    return Math.floor(Math.random() * (max - min + 1)) + min
}


// app.post('/', (req, res) => {
//   res.render('index', {
//     player_name: req.body.player_name,
//     bottles: 99,
//     next: 98
//   })
// })
