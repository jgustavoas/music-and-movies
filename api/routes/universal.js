const express = require('express');
const router = express.Router();

const UniversalControllers = require('../controllers/Universal');

//router.post('/:secao/:tabela', UniversalControllers.create);
router.get('/:TABLE', UniversalControllers.read);
//router.patch('/:secao/:tabela', UniversalControllers.update);
//router.delete('/:secao/:tabela', UniversalControllers.delete);

module.exports = router;
