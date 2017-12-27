const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const complimentsArr = require ('./compliments')
app.set('view engine', 'hbs')
const PORT = 4000
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log (`server running on port ${PORT}`)
})

app.get ('/', (req, res) => {
  let compliment = randomizer()
  res.render('index', {compliment})
})

function randomizer(){
  let randomKey = Math.floor(Math.random() * complimentsArr.length)
  let randomCompliment = complimentsArr[randomKey]
  return randomCompliment
}