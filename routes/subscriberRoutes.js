const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Current path = /api/v1/subscribers
router.get('/', ctrl.subscriber.index);
router.post('/', ctrl.subscriber.create);
router.delete('/:id', ctrl.subscriber.destroy);

module.exports = router;