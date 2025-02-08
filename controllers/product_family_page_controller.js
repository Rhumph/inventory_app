const query = require('../db/queries');
const links = require('../routes/links');

async function getProductFamilyPage(req, res) {
    try {
        const prodfam = await query.getAllProductFamilies();
        res.render('product_family_page', { links: links, prodfam:prodfam});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getProductFamilyPage };
