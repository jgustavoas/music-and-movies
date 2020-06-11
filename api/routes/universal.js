const express = require('express');
const router = express.Router();

const UniversalControllers = require('../controllers/Universal');

router.post('/:MODEL', UniversalControllers.create);
router.get('/:MODEL', UniversalControllers.read);
router.patch('/:MODEL', UniversalControllers.update);
router.delete('/:MODEL', UniversalControllers.delete);

module.exports = router;
