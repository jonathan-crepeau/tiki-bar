const express = require('express');
const router = express.Router();

// Landing Route

router.get('/', (request, response) => {
    response.sendFile('/views/landing.html', {
        root: `${__dirname}/../`
    });
});

// Signup Route

router.get('/signup', (request, response) => {
    response.sendFile('/views/signup.html', {
        root: `${__dirname}/../`
    });
});

// Success Route

router.get('/success', (request, response) => {
    response.sendFile('/views/success.html', {
        root: `${__dirname}/../`
    });
});

// Dashboard Route

router.get('/dashboard', (request, response) => {
    response.sendFile('/views/dash.html', {
        root: `${__dirname}/../`
    });
});

module.exports = router;