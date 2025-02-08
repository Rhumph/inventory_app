const { link } = require('fs');
const query = require('../db/queries');
const links = require('../routes/links');

async function getCategoryPage(req, res) {
    try {
        const categories = await query.getAllCategories();
        res.render('category_page', {links: links, categories: categories});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {getCategoryPage};
