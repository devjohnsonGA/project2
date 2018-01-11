const Popup = require('./schema')
const seedData = require('./seeds.json')

Popup.remove({})
    .then(() => {
        return Popup.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

    // module.exports = Popup
