const { Router } = require('express');
const pf_router = Router();
const path = require('path');
const links = require('./links');
const pf_controller = require('../controllers/product_family_page_controller');

pf_router.get('/', pf_controller.getProductFamilyPage);

module.exports = pf_router;
