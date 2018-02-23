const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set("view engine", "hbs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


var compliments = [
   "Your instructors love you",
   "High five = ^5",
   "Is it Ruby Tuesday yet?",
   "It's almost beer o'clock",
   "The Force is strong with you"
   ]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get('/', (req, res) => {
    var randomCompliments = compliments[Math.floor(Math.random() * compliments.length)]
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    res.render('index', {randomCompliments, randomColor})
})

app.get('/:name', (req, res) => {
     var randomCompliments = compliments[Math.floor(Math.random() * compliments.length)]
     var name = req.params.name
     res.render('index', {name, randomCompliments})
})

app.post('/', (req, res) => {
    var newCompliments = req.body.newCompliments
    console.log(req.body)
    // var text = req.body.text
    res.send(newCompliments)
})

app.listen(4000, () => {
    console.log('Connected 4000 port!')
