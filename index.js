const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
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
    layoutsDir:     'views/',
    defaultLayout:  'layout'   
}))

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/:name', (req, res) => {
    let comp = compliments[Math.floor(Math.random()*compliments.length)]
    let ranColor = colors[Math.floor(Math.random()*colors.length)]
    let name = req.params.name
    res.render('index', {name, comp, ranColor})
})

// app.get('/:name', (req, res) => {
    // res.send(`Hello ${req.params.name}`)
// })
// Hello Express - app.get('/', (req, res) => {
//     res.render('welcome', {
//         player_name: req.body.player_name,
//         bottles: 99,
//         next: 98
//     })
// })


