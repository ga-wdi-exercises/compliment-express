const mongoose = require('./connection.js')

const ComplimentSchema = new mongoose.Schema({
  name: String,
  year: Number
})

const Compliment = mongoose.model('Compliment', ComplimentSchema)

module.exports = Compliment
