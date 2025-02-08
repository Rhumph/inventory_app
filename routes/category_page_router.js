const { Router } = require('express');
const category_router = Router();
const path = require('path');
const links = require('./links');
const categoryController = require('../controllers/category_page_controller');

category_router.get('/', categoryController.getCategoryPage);

module.exports = category_router;
