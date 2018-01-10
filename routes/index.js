var express = require('express')
var router = express.Router()


router.get('/', function(req, res, next){
    res.render('popup')
})

router.get('/popups', function(req, res, next){
    res.json({ hello: 'Worked'})
})

module.exports = router

