const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/emergencycompliments', {useMongoClient: true})

mongoose.Promise=Promise

module.exports=mongoose
