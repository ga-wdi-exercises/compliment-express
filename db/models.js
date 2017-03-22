const mongoose = require('./connection.js')

const ColorSchema = mongoose.Schema({
  hash: String
})

const ComplimentSchema = mongoose.Schema({
  text: String,
})

const Color = mongoose.model('Color', ColorSchema)
const Compliment = mongoose.model('Compliment', ComplimentSchema)

module.exports = {
  Color,
  Compliment
}
