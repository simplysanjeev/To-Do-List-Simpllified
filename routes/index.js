const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controller');
router.get('/', homeControllers.home);
router.post('/add-task', homeControllers.addTask);
router.get('/delete-task', homeControllers.deleteTask);
router.get('/mark-task', homeControllers.markTask);
module.exports = router;