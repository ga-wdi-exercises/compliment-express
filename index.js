const express = require("express")
const hbs = require('hbs')

const bodyParser = require('body-parser')
const app = express()

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }))

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var randComp = getRandomElement(compliments)
var randColor = getRandomElement(colors)

app.get('/', (request, response) => {
  response.render("index", {
    // random compliment
    randComp,
    // random color
    randColor
  })
})

function getRandomElement( arr ) {
  // create a random index
  var randomIndex = Math.floor(Math.random() * arr.length)
  // return the item at that index from the array
  return arr[ randomIndex ]
}


/*

level 1:
random compliment with a random color


level 2:
personalize with name in parameters and still random compliment and random color


pseudo-code
level:1
button for thanks
button for meh that displays a new compliment
function to shuffle the compliments
function to shuffle the colors
<h2> for emergency compliment

level:2
a /name page to personalize the compliments
should redirect to /name page

level:3
use a form to post new compliments
push the new compliment to the compliments array

*/

app.listen(3000, () => {
  console.log("app listening on port 4000")
})
