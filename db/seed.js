const models = require('./models.js')

const Color = models.Color
const Sass = models.Sass

const colors = require('./colors.json')
const sasses = require('./sasses.json')

Color.remove({}).then(() => {
  Color.collection.insert(colors)
})

Sass.remove({}).then(() => {
  Sass.collection.insert(sasses)
})
