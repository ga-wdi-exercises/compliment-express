const express = require('express')
const app = express()

app.listen(4000, _ => {
  console.log('App listening on port 4000')
})

app.get("/", (req, res) => {
  res.send("Hello World")
})
