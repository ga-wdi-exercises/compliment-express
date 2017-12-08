const Compliment = require('./schema')
const seedData = require('./seeds.json')

Compliment.remove({})
  .then(()=>{
    return Compliment.collection.insert(seedData)
  })
  .then(()=>{
    process.exit()
  })
  .catch(err =>{
    console.log(err)
  })
