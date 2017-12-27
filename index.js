const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const randomizer = require("./randomizer")
app.set("view engine", "hbs")
const PORT = 4000
app.use(express.static("public"))

app.use(bodyParser.json()) // handle json post request
app.use(bodyParser.urlencoded({ extended: true })) // handles form submission

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

let compliment = ''
let color = ''
let name = ''

app.get('/', (req, res) => {

  compliment = randomizer.randomComp()
  color = randomizer.randomColor()
  res.render("index", { compliment, color, name })
})

app.get('/:name', (req, res) => {
  name = req.params.name
  if (name === ':name' || '') {
    name = ''
    res.redirect('/')
  } else { 
    res.render("index", { compliment, color, name })
    res.redirect('/')
  }
})

app.post('/comp/submit', (req, res) => {
  let newComp = req.body.newComp
  randomizer.saveComp(newComp)
  res.redirect('/')
})