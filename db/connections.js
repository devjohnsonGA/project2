var mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/popup_db', { useMongoClient: true })
    mongoose.Promise = Promise
    module.exports = mongoose
