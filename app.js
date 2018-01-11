var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    db = require('./model/db'),
    routes = require('./routes/index'),
    users = require('./routes/users');
    app   = express()
    

    app.use(bodyParser.urlencoded({ extended: false}))
    app.use(bodyParser.json())

    app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html')

    // app.use(function (req, res) {
    //     res.setHeader('Content-Type', 'text/plain')
    // })

    app.set('port', process.env.PORT || 3300);
    app.set('views', __dirname + '/views');
    
    app.get('/', routes)
    app.get('/users', routes)
    app.get('/users/popups', routes)

    app.listen(app.get('port'), function(){
        console.log('Server up: http://localhost:' + app.get('port'));
    });    
