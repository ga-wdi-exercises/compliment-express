const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/compliment', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
