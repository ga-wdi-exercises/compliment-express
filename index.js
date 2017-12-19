var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
const express = require('express')
const hbs = require('express-handlebars')

}

const app = express()

app.listen(4000, () => {
    console.log('app listening')
})

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})


