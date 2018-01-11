var express = require('express')
    router = express.Router()
    Popup = require('../model/schema')
    bodyParser = require('body-parser'),
    
router.get('/', function(req, res, next){
    res.render('popup')
})

router.get('/users', function(req, res, next){
    res.send('User Page')
})
router.post('/users', function(req, res, next){
    console.log(req.body)
})


router.get('/users/popups', function(req, res, next){
    res.send('Users Popup Page')
})

module.exports = router


