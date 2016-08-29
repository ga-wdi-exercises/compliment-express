var mongoose = require('mongoose');
var Schema = require("./schema.js");

var Compliment = Schema.Compliment
var Color = Schema.Color

// db/seeds.js

// First we clear the database of existing Compliments and Colors.
Compliment.remove({}, function(err){
  console.log(err)
});

Color.remove({}, function(err){
  console.log(err);
})
//**************************************Compliment DEFINITIONS**********************
var compliment1 = new Compliment({body: "Your instructors love you"})
var compliment2 = new Compliment({body: "High five = ^5"})
var compliment3 = new Compliment({body: "Is it Ruby Tuesday yet?"})
var compliment4 = new Compliment({body: "It's almost beer o'clock"})
var compliment5 = new Compliment({body: "The Force is strong with you"})

//**************************************Colors DEFINITIONS********************
var color1 = new Color ({code: "#FFBF00"})
var color2 = new Color ({code: "#0080FF"})
var color3 = new Color ({code: "#01DF3A"})
var color4 = new Color ({code: "#FF0080"})

//**************************************TABLE DEFINITIONS***********************

var compliments = [
  compliment1,
  compliment2,
  compliment3,
  compliment4,
  compliment5
];
var colors = [
  color1,
  color2,
  color3,
  color4
];

//**************************************FOR LOOP FOR ALLOCATING REMINDERS TO AUTHORS*********

for (var i = 0; i<compliments.length; i++){
  compliments[i].color.push(colors.sample)
  commpliments[i].save(function(err, author){
    if(err){
      console.log(err);
    }
    else{
      console.log("WE SAVED SOME SHIT! - Sarah");
      console.log(compliment);
    }
  })
}
