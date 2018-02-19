const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
const _ = require('lodash')
let compliments =  require('./compliments')
const colors = ["lightblue", "orange","pink","lightgreen"]
console.log(compliments)
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post(('/'), (req, res) => {
    compliments.push(req.body.compliment)
    let name = req.body.name
    res.redirect(`/${name}`)
    console.log(compliments)
})
// https://expressjs.com/en/guide/routing.html

app.get('/', (req,res) => {
    let randomCompliment = _.sample(compliments)
    let randomColor = _.sample(colors)
    res.render('index', {randomCompliment, randomColor})
    console.log(compliments)
})
app.get('/:name', (req,res) => {
    let randomCompliment = _.sample(compliments)
    let randomColor = _.sample(colors)
    let name = `, ${req.params.name}`
    res.render('index', {randomCompliment, randomColor, name})
})


app.listen(4000, () => {
    console.log(('app listening on port 4000'))
})

