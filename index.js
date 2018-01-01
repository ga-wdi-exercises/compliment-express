const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const complimentController = require('./controllers/complimentController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//use handlebars
app.set('view engine', 'hbs')

app.listen(4000, () => {
    console.log('app listening on port 4000')
})

app.post('/', (req, res) => {
  res.send(`Hello  + ${req.params.name}`)
})
