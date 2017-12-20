const express = require("express")
const app = express()

var bottles = 99

app.get("/", (request, response) => {
  response.send(`99 Bottles of beer on the wall <a href='/98'>take one down, pass it around </a>`)
})


app.get("/:bottles", (request, response) => {
    let bottles = request.params.bottles
    response.send(`${bottles} Bottles of beer on the wall <a href='${bottles-1}'>take one down, pass it around </a>`)
})
app.listen(4000, () => {
  console.log("app listening on port 4000")
})

// install express and body parsers. 


