// EXTERNAL MODULES =============== //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// INTERNAL MODULES =============== //
const db = require('./models');
const routes = require('./routes');

// CONFIGURATION VARIABLES =============== //
const PORT = process.env.PORT || 4000;

// MIDDLEWARE =============== //

app.use(bodyParser.json());

// SERVER PUBLIC DIRECTORY //
app.use(express.static(__dirname + '/public'));

// HTML ROUTES =============== //

app.use('/', routes.views);


// API ROUTES =============== //

app.use('/api/v1/subscribers', routes.subscriber);


// START SERVER =============== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});