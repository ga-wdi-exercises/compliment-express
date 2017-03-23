const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

let compliments = [
   "Your instructors love you",
   "High five = ^5",
   "Is it Ruby Tuesday yet?",
   "It's almost beer o'clock",
   "The Force is strong with you"
 ]
let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
   let compliment = compliments[Math.floor(Math.random() * compliments.length)]
   let color = colors[Math.floor(Math.random() * colors.length)]
   res.render('index', {compliment,color})
})

app.get('/:name', (req,res) => {
  let name = req.params.name
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]
  res.render('index', {name,compliment,color})

})

app.listen(4000, () => {
  console.log("Listening on port 4000");
})
