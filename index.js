const express = require('express')
const app = express()
const parser = require('body-parser')

app.use('/assets/', express.static('public'))
app.set('view engine', 'hbs')

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]
    res.render('compliment-index', {compliments})
})

app.get('/:name', (req, res) => {
    let name = req.params.name
    res.render('compliment-index', { name })
})

app.post('/', (req, res) => {
    res.render('compliment-index', {
        newCompliment: req.body.newCompliment,
    })
})

app.listen(4000, () => {
    console.log('yoooooooo')
})
