const models = require('./models.js')

const Color = models.Color
const Sass = models.Sass

function randomElement(arr) {
  let len = arr.length
  let index = Math.floor(Math.random() * len)
  return arr[index]
}

module.exports = {
  index(req, res) {
    let colors = Color.find({})
    let sasses = Sass.find({})
    let color = randomElement(colors)
    let sass = randomElement(sasses)
    let name = req.params.name
    res.render("index", {
      color,
      sass,
      name
    })
  }
}
