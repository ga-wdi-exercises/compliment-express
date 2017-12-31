const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")
// ** require models(colors, compliments):
// * move compliments array to module in 'models' directory:
const complimentsArray = 
[
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you",
    "Even if you were cloned, you'd still be one of a kind. And the better looking one.",
    "Your smile is proof that the best things in life are free.",
    "You're smarter than Google and Mary Poppins combined.",
    "You inspire me and most likely strangers. Also, friends and stalkers. You are the inspiration to many.",
    "Are you a beaver, because damn.",
    "Aside from food, you're my favorite."
]


// function to generate random compliment:
function randomCompliment() {

return complimentsArray[Math.floor(Math.random() * (complimentsArray.length - 1))]
}

app.set("view engine", "hbs")

// serves static content (css) from the public directory:
app.use(express.static(__dirname + '/public'));

// handle json post reqs
app.use(bodyParser.json())
// handles form submissions
app.use(bodyParser.urlencoded({ extended: true }))

/////////////

app.get("/", (req, res) => {
    let compliment = randomCompliment()
    console.log(compliment)
    let next = '/'
    res.render('index', {compliment: compliment, next: next})
})

// customize to user: 

app.get("/:name", (req, res)=> {
    let name = req.params.name
    let compliment = randomCompliment()
    let next = '/' + req.params.name
    res.render('index', {name: name, compliment: compliment, next: next})
})

// Create New Compliment: 



////////////

app.listen(4000, () => {
    console.log("listening on port 4000")
})

