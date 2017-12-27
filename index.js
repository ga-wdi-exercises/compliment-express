const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const randomizer = require("./randomizer")
app.set("view engine", "hbs")
const PORT = 4000
app.use(express.static("public"))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.redirect('/:name')
})

app.get('/:name', (req, res) => {
  let name = req.params.name
  let compliment = randomizer.randomComp()
  let color = randomizer.randomColor()

  if (name === ':name' || '') {
    res.render("index", { compliment, color })
  } else { res.render("index", { compliment, color, name }) }
  console.log(`${compliment}, color=${color}, name is ${name}`)
})