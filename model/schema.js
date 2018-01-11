const mongoose = require('./db')

const PopupSchema = new mongoose.Schema({
    name: String,
    popup: String,
    lat: Number,
    lng: Number
})

const Popup = mongoose.model('Popup', PopupSchema)

module.exports = Popup
