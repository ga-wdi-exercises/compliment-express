const express = require("express")
const app = express()
const hbs = require("express-handlebars")
const bodyParser = require("body-parser")

app.set("view engine", "hbs")

// handle json post reqs
app.use(bodyParser.json())
// handles form submissions
app.use(bodyParser.urlencoded({ extended: true }))




/////////////

app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
})

app.get("/", (req, res) => {
    res.send("")
})

////////////

app.listen(4000, () => {
    console.log("listening on port 4002")
})

