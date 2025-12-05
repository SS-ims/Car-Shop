const express = require('express');
const router = express.Router();

const usersController = require('../controllers/stores');
const validation = require('../middleware/validate');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/', validation.saveStore, usersController.createStore);
router.put('/:id', validation.saveStore, usersController.updateStore);
router.delete('/:id', usersController.deleteStore);

module.exports = router;