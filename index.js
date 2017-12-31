const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")

app.set("view engine", "hbs")

// serves static content (css) from the public directory:
app.use(express.static(__dirname + '/public'));

// handle json post reqs
app.use(bodyParser.json())
// handles form submissions
app.use(bodyParser.urlencoded({ extended: true }))

/////////////

app.get("/", (req, res) => {
    // double check - math in or outside quotes:
    res.redirect('/' + (Math.floor(Math.random() * 11)))
})

        // app.get('/css/main.css', function(req, res){
        //     res.send('css/main.css')
        //     res.end()
        // })

app.get("/:complimentNum?", (req, res) => {
    let complimentsArr = [
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
    let compliment = complimentsArr[req.params.complimentNum] || complimentsArr[(Math.floor(Math.random() * 11))]
    // * not working:
    // if (complimentsArr[req.params.complimentNum + 1] <= complimentsArr.length - 1) {
    //     let next = complimentsArr[req.params.complimentNum + 1]
    // } else {
    //     let next = complimentsArr[0]
    // }
    // // * replaced with: 
    let next = (Math.floor(Math.random() * 11))
    // res.send(`<h1>Compliment Express</h1>` + compliment)

    // next is not defined?
    res.render('index', {compliment: compliment, next: next})
})

////////////

app.listen(4000, () => {
    console.log("listening on port 4000")
})

