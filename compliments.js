module.exports = {
  index(req,res) {
    let compliments = [
      "Your instructors love you!!" ,
      "High five!!",
      "Is it Ruby Tuesday yet?",
      "It's almost beer o'clock!!",
      "The Force is strong with you",
      "I bet you sweat glitter",
      "Unicorns!!"
    ]
    let compliment = compliments[Math.floor(Math.random()*compliments.length)]
    let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
    let color = colors[Math.floor(Math.random()*colors.length)]
    let name = `${req.params.name}`
    res.render('index', { compliments, compliment, colors, color, name})
  }
}
