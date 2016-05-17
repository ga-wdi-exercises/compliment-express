var mongoose = require('mongoose');

var ComplimentSchema = new mongoose.Schema({
  text: String
},
{ versionKey: false });

mongoose.model("Compliment", ComplimentSchema);
mongoose.connect(process.env.MONGOLAB_URL || "mongodb://localhost/compliment_generator");

module.exports = mongoose;
