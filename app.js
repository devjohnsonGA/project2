var express = require('express'),
    app   = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    popups      = require('./controllers/index')
    methodOverride = require('method-override'),
    hbs = require('express-handlebars')

    db = require('./db/connections'),
    routes = require('./controllers/index')


    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())
    app.use(methodOverride('_method'))
    app.set('view engine', 'hbs')

    app.engine('.hbs', hbs({
        extname:        '.hbs',
        partialsDir:    'views/',
        layoutsDir:     'views/',
        defaultLayout:  'popups-index'
      }))

    app.set('port', process.env.PORT || 3300);
    
    
    app.get('/', routes)
    // app.get('/users', routes)
    // app.get('/users/popups', routes)

    app.use('/popups', popups)

    app.listen(app.get('port'), function(){
        console.log('Server up: http://localhost:' + app.get('port'));
    });    
{}
