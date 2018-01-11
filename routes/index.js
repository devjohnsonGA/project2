var express = require('express')
var router = express.Router()
const Popup = require('../model/schema')

router.get('/', function(req, res, next){
    res.render('popup')
})

// router.get('/', (req, res) => {
//     Popup.find({})
//     .then((popup) => {
//         res.render('popups-index', {
//             popups: popups
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

router.get('/users', function(req, res, next){
    res.send('User Page')
})

router.get('/users/popups', function(req, res, next){
    res.send('Users Popup Page')
})

module.exports = router
// module.exports = Popup

