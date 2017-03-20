const express = require("express")
const app = express()
const bodyParser = require("body-parser")
// const compliments = require("./compliments.js")

var compliments = [
  "Your instructors love you!!" ,
  "High five!!",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock!!",
  "The Force is strong with you",
  "I bet you sweat glitter",
  "Unicorns!!"
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))


 // randomized compliment & color
app.get("/", function(req, res) {
  let compliment = compliments[Math.floor(Math.random()*compliments.length)]
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  let color = colors[Math.floor(Math.random()*colors.length)]
  res.render('index', { compliments, compliment, colors, color})
})

 // personalized compliment
app.get("/:name", function(req, res) {
  let compliment = compliments[Math.floor(Math.random()*compliments.length)]
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  let color = colors[Math.floor(Math.random()*colors.length)]
  let name = `${req.params.name}`
  res.render('index', { compliments, compliment, colors, color, name})
})

// add a compliment
app.post("/:name", function(req,res){
let name = `${req.params.name}`
 compliments.push(req.body.new_compliment);
 console.log(compliments)
 res.redirect("/" + name)
})


app.listen(4000, () => {
  console.log("app listening on port 4000")
})
