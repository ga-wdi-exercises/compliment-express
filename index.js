const express = require('express')
const app = express()
const compliments = require('./controllers/compliments.js')

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))


app.listen(4000, () => {
  console.log('listening on port 4000')
})


app.get("/", compliments.index)
