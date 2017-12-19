//Compliment generator
//by Gwen Latasa

//global data
let compliments = [
  'you are a scrumptious unicorn!',
  'your smile lights up the world',
  'where you walk flowers bloom',
  'how you doin?',
  'the sexiest mermaid in the sea'
]

let colors = [
    '#ffb3ba',
    '#ffdfba',
    '#ffffba',
    '#baffc9',
    '#bae1ff'
]


const express = require('express')
const app = express()
app.set('view engine', 'hbs')

app.get('/', ( request, response ) => {
  compliment = getCompliment()
  color = getColor()

 response.render("index", {compliment, color})
 //document.body.style.backgroundColor = getColor();
  //response.render('hi')
  //response.send(`<body><h1>${theCompliment}</h1></body>`)
  // ${'body'}.css('background-color', getColor())
  // this.body.style.backgroundColor = getColor();

  //res.render("index", {bottles, next})
})


app.listen(4000, function() {
  console.log('listening on 4000')
})

function getCompliment () {
  return compliments[Math.floor(Math.random() * compliments.length )]
}

function getColor () {
  return colors[Math.floor(Math.random() * colors.length )]
}
