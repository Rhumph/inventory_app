const { Router } = require('express');
const dbman_router = Router();
const path = require('path');
const links = require('./links');
const dbman_controller = require('../controllers/db_manipulation_page_controller');

dbman_router.get('/', dbman_controller.getDBManPage);
dbman_router.get('/add_category', dbman_controller.getAddCategoryPage);
dbman_router.get('/add_brand', dbman_controller.getAddBrandPage);
dbman_router.get('/add_product_family', dbman_controller.getAddProductFamilyPage);
dbman_router.get('/add_product', dbman_controller.getAddProductPage);

dbman_router.post('/add_product', dbman_controller.handleAddProduct);
dbman_router.post('/add_brand', dbman_controller.handleAddBrand);
dbman_router.post('/add_category', dbman_controller.handleAddCategory);
dbman_router.post('/add_product_family', dbman_controller.handleAddProductFamily);

module.exports = dbman_router;

