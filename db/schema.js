const mongoose = require('./connection')

let ComplimentSchema = new mongoose.Schema({
  body:String
})

let Compliment = mongoose.model('Compliment', ComplimentSchema)

module.exports = Compliment
