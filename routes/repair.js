const express = require('express');
const router = express.Router();

const repairController = require('../controllers/repair');
const validation = require('../middleware/validate');

router.get('/', repairController.getAll);
router.get('/:id', repairController.getSingle);
router.post('/', validation.saveRepair, repairController.createCar);
router.put('/:id', validation.saveRepair, repairController.updateCar);
router.delete('/:id', repairController.deleteCar);

module.exports = router;