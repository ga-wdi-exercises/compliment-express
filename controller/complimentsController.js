var Schema = require("../db/schema.js")
var Compliment = Schema.Compliment;
var Color = Schema.Color;

var complimentsController = {
  index: function(){
    Compliment.find({}, function(err, docs){
      console.log(docs);
    });
  }

  show: function(req){
    Compliment.findOne({"body": req.body}, function(err, docs){
      console.log(docs);
    })
  }
};

complimentsController.index();

complimentsController.show({body: "It's almost beer o'clock"})
