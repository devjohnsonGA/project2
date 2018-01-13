var express = require('express')
    router = express.Router()
    Popup = require('../db/schema')
    
router.get('/', function(req, res, next){
    res.render('layout')
})

// router.get('/:name', function(req, res, next){
//     res.render('popups-index')
// })
// router.post('/users', function(req, res, next){
//     console.log(req.body)
// })


module.exports = router





