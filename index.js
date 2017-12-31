const express = require('express')
const app = express()
const parser = require('body-parser')

app.use('/assets/', express.static('public'))
app.set('view engine', 'hbs')

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

app.get('/', (req, res) => {
    res.render('compliment-index')
})

app.get('/:name', (req, res) => {
    let name = req.params.name
    res.render('compliment-index', { name })
    // let greeting = `Hi ${name}`
    // res.send(`${greeting} ${randomCompliement}`)
})

app.post('/', (req, res) => {
    res.render('compliment-index', {
        name: req.body.compliment,

    })
})

// app.get('/:name', (req, res) => {
//     let name = req.params.name
//     let greeting = `Hi ${name}`
    
//     for (i = 0; i < compliments.length; i++) {
//         let random = (Math.floor(Math.random() * compliments.length))
//         let randomCompliment = compliments[random]
//         // let randomColor = colors[random]
//         res.send(`${greeting} ${randomCompliment}`)
//         }
// })

app.listen(4000, () => {
    console.log('yoooooooo')
})
