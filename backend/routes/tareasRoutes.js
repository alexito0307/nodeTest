const express = require('express');
const router = express.Router();
const { getTarea, createTarea } = require('../controllers/tareasControllers');

router.get('/', getTarea)
router.post('/', createTarea)
// router.put('/:id', updateTarea)
// router.delete('/:id', deleteTarea)

module.exports = router;