const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")

app.set("view engine", "hbs")

// handle json post reqs
app.use(bodyParser.json())
// handles form submissions
app.use(bodyParser.urlencoded({ extended: true }))




/////////////

app.get("/", (req, res) => {
    // double check - math in or outside quotes:
    res.redirect('/' + (Math.floor(Math.random() * 4)))
})

app.get("/:complimentNum?", (req, res) => {
    let complimentsArr = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]
    let compliment = complimentsArr[req.params.complimentNum] || complimentsArr[(Math.floor(Math.random() * 4))]
    // * not working:
    let next
    if (complimentsArr[req.params.complimentNum + 1] <= complimentsArr.length - 1) {
        let next = complimentsArr[req.params.complimentNum + 1]
    } else {
        let next = complimentsArr[0]
    }
    // res.send(`<h1>Compliment Express</h1>` + compliment)

    // next is not defined?
    res.render('index', {compliment: compliment, next: next})
})

////////////

app.listen(4000, () => {
    console.log("listening on port 4000")
})

