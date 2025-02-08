const { Router } = require('express');
const brand_router = Router();
const path = require('path');
const links = require('./links');
const brand_controller = require('../controllers/brand_page_controller');


brand_router.get('/', brand_controller.getBrandPage);

module.exports = brand_router;