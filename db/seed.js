const models = require('./models.js')

const Color = models.Color
const Compliment = models.Compliment

const colors = require('./colors.json')
const compliments = require('./compliments.json')

Color.remove({}).then(() => {
  Color.collection.insert(colors)
})

Compliment.remove({}).then(() => {
  Compliment.collection.insert(compliments)
})
