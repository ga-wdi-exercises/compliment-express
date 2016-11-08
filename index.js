var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8000, () => {
  console.log("CONNECTED ON port 8000")
})

app.post("/", (req, res) => {
  console.log(req.body)
  compliments.push(req.body.title)
    res.redirect("/")

})

app.get("/:name?", (req, res) => {
  let randComplimentsArr = shuffle(compliments)
  let randColorsArr = shuffle(colors)

  let randCompliment = select(randComplimentsArr)
  let randColor = select(randColorsArr)
  let name = req.params.name
  console.log(compliments)

  res.render("index", {randCompliment, randColor, name});
})



//Hardcoded data
let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

// Choose 1st item out of randomized compliment
function select(array){
  return array[0]
}

//Shuffle global function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
