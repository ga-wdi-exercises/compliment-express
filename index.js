const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")
// ** require models(colors, compliments):
const compliments = require('./models/compliments')


// function to generate random compliment:
function randomCompliment() {

return compliments[Math.floor(Math.random() * (compliments.length - 1))]
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

// app.post("/", (req, res) => {
//     let name = req.params.name
//     compliments.push(req.body.name)
//     res.redirect("/")
// })


app.listen(4000, () => {
    console.log("listening on port 4000")
})

