//Require Express
const express = require('express');

//Creating router
const router = express.Router();

//Requiring home contollers
const homeControllers = require('../controllers/home_controller');

router.get('/', homeControllers.home);
router.post('/add-task', homeControllers.addTask);
router.get('/delete-task', homeControllers.deleteTask);
router.get('/mark-task', homeControllers.markTask);

//Expoting Router
module.exports = router;