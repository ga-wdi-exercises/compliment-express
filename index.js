const express = require('express')
const app = express()

app.listen(4000, () => {
    console.log('app listening on port 4000')
})

app.get("/", (req, res) => {
    res.send("Hello " + req.params.user_name)
  })

//use handlebars
app.set('view engine', 'hbs')
