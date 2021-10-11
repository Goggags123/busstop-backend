var path = require('path')
var serveStatic = require('serve-static')
var router = require('./src/index.js')
var bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
var app = express()
var express = require("express")
 , url = require("url")
 , swagger = require("swagger-node-express");

app.use(express.json());
app.use(express.urlencoded());
 
// Couple the application to the Swagger module.
swagger.setAppHandler(app);
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(bodyParser.json());
app.use(router)
app.use((req,res,next)=>{
    res.status(404).send('Page not found.');
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
})
var port = process.env.PORT || 8000
app.listen(port)
console.log('server started on' + port)