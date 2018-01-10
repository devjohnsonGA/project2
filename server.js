const express   =   require('express')
const app       =   express()
const bodyParser =  require('body-parser')
const methodOverride = require('method-override')
const hbs = require('hbs')
const db = require('./config/db')

const port = process.env.port|| 8080

//mongoDB 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('X-HTTP-Method-Override'))


app.set('view engine', __dirname + '/views/layout')

app.get('/', (req, rep) => {
    rep.render('/layout')
})


// require('./app/routes')(app)

app.listen(port)

console.log(port + ' activated')

exports = module.exports = app 

