// EXTERNAL MODULES =============== //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const app = express();

// INTERNAL MODULES =============== //
const db = require('./models');
const logger = require('./middleware/logger');
const formatter = require('./middleware/formatter');

// CONFIGURATION VARIABLES =============== //
const PORT = process.env.PORT || 4000;

// MIDDLEWARE =============== //

app.use(bodyParser.json());

// SERVER PUBLIC DIRECTORY //
app.use(express.static(__dirname + '/public'));

// HTML ROUTES =============== //

// ROOT ROUTE //

app.get('/', (request, response) => {
    response.send(`
        <h1>Tiki Bar Root Route</h1>
    `)
})

// API ROUTES =============== //

// GET Index All Users

// app.get('/api/v1/users', (request, response) => {
//     db.User.find({}, (error, indexUsers) => {
//         if (error) return response.status(500).json({message: 'Something is not right.'})
//         response.status(200).json(indexUsers);
//     });
// });

// POST Create Single User

// app.post('/api/v1/users', (request, response) => {
//     db.User.create(request.body, (error, createUser) => {
//         if (error) return response.status(500).json({message: 'Something went wrong. Please try again.'})
//         response.status(200).json(createUser);
//     });
// });

// DELETE Remove Single User

// app.delete('/api/v1/users/:id', (request, response) => {
//     db.User.findByIdAndDelete(request.params.id, (error, deleteUser) => {
//         if (error) return response.status(500).json({message: 'Something is wrong, girl.'})
//         response.status(200).json(deleteUser);
//     });
// });

// START SERVER =============== //

app.listen(PORT, () => {
    console.log(`This server is running on http://localhost:${PORT}`);
});