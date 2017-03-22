const mongoose = require('./connection.js')

const ColorSchema = mongoose.Schema({
  hash: String
})

const SassSchema = mongoose.Schema({
  text: String,
})

const Color = mongoose.model('Color', ColorSchema)
const Sass = mongoose.model('Sass', SassSchema)

module.exports = {
  Color,
  Sass
}
