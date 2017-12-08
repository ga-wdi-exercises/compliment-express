const Compliment = require('./schema.js')
const seedData = require('./seeds.json')

Compliment.remove({})
// ^ rubys Destroy.all
  .then(() => {
    return Compliment.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })
