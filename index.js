const express = require('express')
const app = express()

app.listen(3001, ()=> {
  console.log('app listening on 3k1')
})

app.get('/:name', (req, res) => {
  res.send(`hello,  ${req.params.name}`)
})
