module.exports = {
  index: function (req, res) {
    var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var compliment = compliments[Math.floor(Math.random()*compliments.length)]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var color = colors[Math.floor(Math.random()*colors.length)]

 var name;
    res.render('index', {
      compliment: compliment,
      color: color,
      name: req.params.name
    });
  }
};
