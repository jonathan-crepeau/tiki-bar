const express = require('express');
const app = express.App();
const ctrl = require('../controllers');

// Current path = /api/v1
app.get('/subscriber', ctrl.subscriber.index);
app.post('/subscriber', ctrl.subscriber.create);
app.delete('/logout', ctrl.subscriber.destroy);

module.exports = app;