module.exports = {
  index: (req, res) => {
    var compliment = compliments[Math.floor(Math.random()*compliments.length)];
    var color = colors[Math.floor(Math.random()*colors.length)];
    res.render("index", {
      compliment: compliment,
      color: color
    })
  },
  name: (req, res) => {
    var compliment = compliments[Math.floor(Math.random()*compliments.length)];
    var color = colors[Math.floor(Math.random()*colors.length)];
    var name = req.params.name
    res.render("name", {
      compliment: compliment,
      color: color,
      name: name
    })
  }
}
