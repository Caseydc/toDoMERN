const { Router } = require('express');

const toDoController = require('../controllers/toDoController');

const router = Router();

router.get('/tasks', toDoController.index)

router.post('/tasks', toDoController.create)

router.put('/task/:id', toDoController.update)

router.delete('/task/:id', toDoController.destroy)

module.exports = router;