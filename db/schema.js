const mongoose = require('../db/connections')

const PopupSchema = new mongoose.Schema(
    {
    name: String,
    popup: String,
    lat: Number,
    lng: Number
    }
)

mongoose.model('Popup', PopupSchema)

module.exports = mongoose
