// EXTERNAL MODULES =============== //
const express = require('express');
const app = express();

// INTERNAL MODULES =============== //

// CONFIGURATION VARIABLES =============== //
const PORT = process.env.PORT || 4000;

// MIDDLEWARE =============== //

// HTML ROUTES =============== //

// ROOT ROUTE //

app.get('/', (request, response) => {
    response.send(`
     <h1>Tiki Bar Root Route</h1>
     `)
})

// API ROUTES =============== //

// START SERVER =============== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});