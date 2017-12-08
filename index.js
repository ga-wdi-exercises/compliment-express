const express = require('express')
const parser = require('body-parser')
const hbs = require('express-handlebars')

const compliments = require('./controllers/compliments')

const app=express()

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout-main'
}))

app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.get('/', (req,res)=>{
  res.redirect('/compliments')
})

app.use('/compliments', compliments)

app.listen(3000, ()=>{
  console.log('app listening on port 3000')
})
