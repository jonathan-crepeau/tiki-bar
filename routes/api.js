const express = require('express');
const app = express.App();
const ctrl = require('../controllers');

// Current path = /api/v1
app.get('/subscriber', ctrl.auth.find);
app.post('/subscriber', ctrl.auth.create);
app.delete('/logout', ctrl.auth.delete);

module.exports = app;