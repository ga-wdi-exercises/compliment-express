const express = require('express')
const Compliment = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Compliment.find({})
  .then((compliments) => {
    res.render('compliment-show', {
      compliments: compliments
    })
  })
})



module.exports = router
