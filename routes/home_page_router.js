const { Router } = require('express');
const hp_router = Router();
const path = require('path');
const links = require('./links');
const hp_controller = require('../controllers/home_page_controller');
const query = require('../db/queries');



hp_router.get('/', hp_controller.getHomePage);
hp_router.post('/delete/:id', hp_controller.deleteProduct);

module.exports = hp_router;