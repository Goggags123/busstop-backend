const express = require('express');
const app = express();
const gpsRoute = require('./routes/GPS');

app.use(gpsRoute);