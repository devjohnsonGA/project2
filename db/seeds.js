const mongoose = require('../model/popup')
const seedData = require('./seeds.json')

const Popup = mongoose.model('Popup')

Popup.remove({})
    .then(() => {
        return Popup.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

