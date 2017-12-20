var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var app = express()

// data arrays
var compliments = ["Your instructors love you", "High five = ^5", "Is it Ruby Tuesday yet?", "It's almost beer o'clock", "The Force is strong with you"]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

// handlebars config
app.set("view engine", "hbs")
app.engine('.hbs', hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
})) 

// Serve static content (css, etc) for the app from the “public” directory in the application directory
app.use(express.static(__dirname + '/public'))

// establish bodyParser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// random generator
function generateRandom(arr) {
    var randomVal = arr[Math.floor(Math.random() * arr.length)]
    return randomVal
}

// level 1: generic compliment
app.get("/", function(req, res) {
    var randomCompliment = generateRandom(compliments)
    var randomColor = generateRandom(colors)
    res.render("welcome", { compliment: randomCompliment, color: randomColor })
})

// level 2: personalized compliment
app.get("/:name", function(req, res) {
    var name = req.params.name
    var randomCompliment = generateRandom(compliments)
    var randomColor = generateRandom(colors)
    res.render("customized", { name: name, compliment: randomCompliment, color: randomColor })
})

// level 3: user submitted compliments
// app.get("/create", function(req, res) {
//     res.render("create")
// })

// app.post("/create/new", function(req, res) {
//     compliments.push(req.body.compliment)
//     res.redirect('/')
// })

// level 3: user submitted compliments
app.post("/:name/create", function(req, res) {
    compliments.push(req.body.compliment)
    var name = req.params.name
    res.redirect('/' + name)
})

// define the applications port
app.listen(3000, function() {
    console.log("The app is up and running on port 3000")
})
