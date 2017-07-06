
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

const express = require("express")
const app = express()

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  var  y = Math.floor(Math.random() * 5);
  console.log(y);
  res.render("index")
  // res.send("Hello friends,"+compliments[y])

})
app.get("/new", ( req, res ) => {
  res.render("index")
})
app.post("/",function(req,res){
  compliments.push(req.body)
  console.log(compliments.length);
  lastelemt=compliments.length
  // res.send("Hello friends,"+ compliments[lastelemt])
  res.redirect("/")

})

app.get("/:name", (req, res) => {
  var  y = Math.floor(Math.random() * 5);
  console.log(y);
  res.send( "Hello "+` ${req.params.name}`+",   " +compliments[y] )
})
