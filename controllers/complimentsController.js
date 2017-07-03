module.exports = {
  index: (req, res) => {
    compliments = [
      "Your instructors love you",
      "High five = ^5",
      "Is it Ruby Tuesday yet?",
      "It's almost beer o'clock",
      "The Force is strong with you"
    ]

    colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

    const name = req.params.name
    const changeColor = Math.floor(Math.random() * colors.length)
    const changeCompliment = Math.floor(Math.random() * compliments.length)

    res.render("index", {
      // playerName: req.body.playerName,
      name: name,
      bgcolor: colors[changeColor],
      compliment: compliments[changeCompliment]
    })
  }
}
