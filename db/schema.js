var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/compliments');

var db = mongoose.connection;

db.on("error", function(err){
  console.log(err);
});

db.once("open", function(){
  console.log("Database connected, It's Lit!");
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    var ColorSchema = new Schema({
      code: String,
    });

var ComplimentSchema = new Schema({
  body: String
  color: [{type: Schema.ObjectId, ref: "Color"}]
});

var Compliment = mongoose.model("Compliment", ComplimentSchema);
var Color = mongoose.model("Color", ColorSchema);

module.exports = {
  Compliment: Compliment,
  Color: Color
};
