const query = require('../db/queries');

async function getHomePage(req, res){
    const products = await query.getAllProducts();
    res.render('home_page', {products: products});

    if (!products){
        res.status(404).send('No products found');
        return;
    }

    res.send(products);
}

module.exports = getHomePage;