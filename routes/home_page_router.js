const { Router } = require('express');
const hp_router = Router();
const path = require('path');
const links = require('./links');
const hp_controller = require('../controllers/home_page_controller');


hp_router.get('/', (req, res) => {
    try {
    // const allproducts = hp_controller.getHomePage();
    res.render('home_page', {links: links});
    } catch (error) {
        console.error("Y'all fucked up");
    }


});

module.exports = hp_router;