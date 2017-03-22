const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const models = require('./db/models.js')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(parser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
}))

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Express is watching your every move ...')
})

const Color = models.Color
const Sass = models.Sass

app.get('/:name?', (req, res) => {
  Color.find({}).then(colors => {
    Sass.find({}).then(sasses => {
      let color = randomElement(colors)
      let sass = randomElement(sasses)
      let name = req.params.name
      res.render('index', {
        color,
        sass,
        name
      })
    })
  })
})

app.post('/', (req, res) => {
  Sass.create(req.body.sass).then(sass => {
    res.redirect('/' + req.params.name)
  })
})

function randomElement(arr) {
  let len = arr.length
  let index = Math.floor(Math.random() * len)
  return arr[index]
}
