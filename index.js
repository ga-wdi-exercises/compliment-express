const express = require("express")
const app = express()
const hbs = require("express-handlebars")

app.set("view engine", "hbs")



app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
})

app.get("/", (req, res) => {
    res.send("hello world")
})

////////////

app.listen(4000, () => {
    console.log("listening on port 4002")
})

