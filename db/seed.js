const models = require('./models.js')

const Color = models.Color
const Sass = models.Sass

const colors = require('./colors.json')
const sasses = require('./sasses.json')

Color.remove({}).then(() => {
  Sass.remove({}).then(() => {
    Color.collection.insert(colors).then(() => {
      Sass.collection.insert(sasses).then(() => {
        process.exit()
      })
    })
  })
})
