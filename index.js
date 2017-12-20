const express = require('express')
const hbs = require('express-handlebars')
// const parser = require('body-parser')
const app = express()

var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.listen(4000, () => {
    console.log('app listening')
})

app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:        'views/',
    defaultLayout:  'layout'   
}))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('welcome')
})
// Hello Express - app.get('/', (req, res) => {
//     res.render('welcome', {
//         player_name: req.body.player_name,
//         bottles: 99,
//         next: 98
//     })
// })


