module.exports = {
  index( req, res){
    let compliments = [
      "Your instructors love you",
      "High five = ^5",
      "Is it Ruby Tuesday yet?",
      "It's almost beer o'clock",
      "The Force is strong with you"
    ]

    let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    let compliment = compliments[Math.floor(Math.random() * compliments.length)]
    let color = colors[Math.floor(Math.random()* colors.length)]
    let name = req.body.name

    res.render('index', {
      compliment,
      color,
      name
    })
  }
}
