const express = require('express')
const app = express()

app.use('/assets/', express.static('public'))
app.set('view engine', 'hbs')

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
    res.render('compliment-index')
    let name = req.params.name
    let greeting = `Hi ${name}`
    // res.send(`${greeting} ${randomCompliement}`)
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
