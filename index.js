let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
 
    res.send('index', {compliments, colors})
})

app.listen(4000, () => {
    console.log('app listening')
})
