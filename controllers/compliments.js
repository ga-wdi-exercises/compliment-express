// const express       = require('express')
// const Compliment    = require('../db/schema')
//
// const router        = express.Router()
//
//
// router.get('/', (req, res) => {
//   Compliment.find({}).then((compliments) =>{
//     res.render('compliments-index', {
//       compliments: compliments
//     })
//   })
// })
//
// router.post('/', (req, res) => {
//   Compliment.create(req.body.compliment)
//   .then ((compliment) => {
//     res.redirect(`/compliments/${compliment.name}`)
//   })
// })
//
//
//
//
//
//
//
//
// module.exports = router
