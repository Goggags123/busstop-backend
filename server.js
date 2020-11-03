var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var routes = require('./src/index.js')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(bodyParser.json());
app.use(routes)
app.use((req,res,next)=>{
    res.status(404).send('Page not found.');
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
})
var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)