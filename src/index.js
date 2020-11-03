const express = require('express');
const app = express();
const gpsRoute = require('./routes/GPS');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(gpsRoute);
app.use(express.static('./public'))
app.use((req,res,next)=>{
    res.status(404).send('Page not found.');
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.info(`Server has started on ${PORT}`));