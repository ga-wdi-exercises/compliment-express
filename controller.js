const models = require('./db/models.js')

const Color = models.Color
const Sass = models.Sass

function randomElement(arr) {
  let len = arr.length
  let index = Math.floor(Math.random() * len)
  return arr[index]
}

module.exports = {
  index(req, res) {
    Color.find({}).then(colors => {
      Sass.find({}).then(sasses => {
        let color = randomElement(colors)
        let sass = randomElement(sasses)
        let name = req.params.name
        res.render('index', {
          color,
          sass,
          name
        })
      })
    })
  }
}
