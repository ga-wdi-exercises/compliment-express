const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))


app.listen(4000, () => {
  console.log('listening on port 4000')
})


let compliments = [
  "Your instructors love you",
   "High five = ^5",
   "Is it Ruby Tuesday yet?",
   "It's almost beer o'clock",
   "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get('/', (req, res)=>{
  let compliment = compliments[Math.floor(Math.random()* compliments.length)]
  let color = colors[Math.floor(Math.random()* colors.length)]
  res.render("index", {color, compliment})
})


app.get('/:name', (req, res)=>{
  let compliment = compliments[Math.floor(Math.random()* compliments.length)]
  let color = colors[Math.floor(Math.random()* colors.length)]
  let name = req.params.name

  res.render("index", {color, compliment, name})
})

app.post('/', (req, res)=>{
  let compliment = compliments[Math.floor(Math.random()* compliments.length)]
  let color = colors[Math.floor(Math.random()* colors.length)]
  let name = req.body.name
  let newCompliment = []
  res.render("index", {color, compliment, name, newCompliment})
})

app.post('/:name', (req, res)=>{
  let compliment = compliments[Math.floor(Math.random()* compliments.length)]
  let color = colors[Math.floor(Math.random()* colors.length)]
  let name = req.body.name
  res.render("index", {color, compliment, name})
})
