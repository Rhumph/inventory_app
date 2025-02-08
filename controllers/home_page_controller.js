const { link } = require('fs');
const query = require('../db/queries');
const links = require('../routes/links');
const pool = require('../db/pool');

async function getHomePage(req, res) {
    try {
        const products = await query.getAllProducts();
        console.log(products);
        if (!products) {
            res.status(404).send('No products found');
            return;
        }
        res.render('home_page', { links: links, products: products});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteProduct(req, res) {
    console.log('controller reached 1'); // Check if this logs
    try {
        const id = req.params.id;
        console.log('id:', id); // Check if ID is correct
        const result = await query.deleteProduct(id);
        console.log('delete result:', result); // See if DB operation worked
        res.redirect('/');
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).send('delete did not work');
    }
}




module.exports = {getHomePage, deleteProduct};