const query = require('../db/queries');
const links = require('../routes/links');

async function getBrandPage(req, res) {
    try {
        const brands = await query.getAllBrands();
        res.render('brand_page', {links: links, brands: brands});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getBrandPage };

