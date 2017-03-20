const express = require('express')
const app = express()
const compliments = require('./controllers/compliments.js')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'))


app.listen(4000, () => {
  console.log('listening on port 4000')
})


app.get('/', (req, res)=> {
  res.render('welcome')
})



app.get("/", compliments.index)
app.get('/:name', compliments.index)

app.post('/:name', (req, res)=>{
  let name = req.body.name

  res.render('index', {
    name,
    compliments

  })
})
