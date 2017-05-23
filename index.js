var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.set("view engine", "hbs")

var compliments = [
      "You have big heart.",
      "You're doing a great job!",
      "Everyone loves you!",
      "You'll be alright.",
      "You're my hero!",
      "You're beautiful.",
      "If you don't understand now, you'll understand it eventually!",
      "Everything comes in threes.",
      "This isn't a compliment but your fly is open.",
      "Breathing exercises work."
    ]

var colors = [
    "#FFBF00",
    "#0080FF",
    "#01DF3A",
    "#FF0080"
  ]


app.get("/", function(req, res){

  function randomizeCompliments(array) {
    var randomArray = array[Math.floor((Math.random() * array.length))]
    return randomArray
  }

  var randomCompliment = randomizeCompliments(compliments)
  var randomColor = randomizeCompliments(colors)

  res.render("index", {
    compliment: randomCompliment,
    color: randomColor
  })

})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
