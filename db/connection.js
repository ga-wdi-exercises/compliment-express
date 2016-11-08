var mongoose = require('mongoose')

var ComplimentSchema = mongoose.Schema({
  body: String,
})

mongoose.model("Compliment", ComplimentSchema)
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/complimentexpress")

module.exports = mongoose
