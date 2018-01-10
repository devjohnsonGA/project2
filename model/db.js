var mongoose = require('mongoose')
mongoose.connect('mongod://localhost/popup_db')
mongoose.Promise = Promise
module.exports = mongoose
