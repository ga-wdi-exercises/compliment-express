const express = require("express")
const app = express()
const bodyParser = require("body-parser")

var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]

// Both of these taken from the classwork
//handles json post requests
app.use(bodyParser.json())
// handles form submissions
app.use(bodyParser.urlencoded({ extended: true }))
// Sets view engine to Handlebars
app.set("view engine", "hbs")
// Set the listening port to my birthday :3
app.listen(12491, () => {
    console.log("app listening on port 12491")
})

// Set get route for index
app.get("/", (req, res) => {
    app.render("index")
})
//every time page is reloaded or maybe when the compliment refreshes, chenge the background color

// set app.get for index
// serve up random compliment

// set app.get for named pages
// hame it return the same type of new page as above, but with a personalized compliment

// set app.post for level 3 homework
// Use a form like the one from the 99 bottles example in class
