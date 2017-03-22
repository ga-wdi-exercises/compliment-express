const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')

const app = express()
const controller = require("./controller.js")

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

app.get('/:name?', controller.index)
