const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/emergencycompliment', {useMongoClient: true})

mongoose.Promise = Promise
module.exports = mongoose
