const express = require('express');
const router = express.Router();

const UniversalControllers = require('../controllers/Universal');

router.post('/:TABLE', UniversalControllers.create);
router.get('/:TABLE', UniversalControllers.read);
router.patch('/:TABLE', UniversalControllers.update);
router.delete('/:TABLE', UniversalControllers.delete);

module.exports = router;
