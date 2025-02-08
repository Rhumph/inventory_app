const query = require('../db/queries');
const links = require('../routes/links');

async function getDBManPage(req, res){
    try{ 
        res.render('db_manipulation_page', {links: links});
    }
    catch(error){
        console.error(error);
        res.status(500).send('DB Manipulation controller error');
    }
}

async function getAddCategoryPage(req, res){
    try{
        res.render('add_category', {links: links});
    }
    catch(error){
        console.error(error);
        res.status(500).send('Add Category controller error');
    }
    
}

async function handleAddCategory(req, res){
    try{
        const { 'category-name': categoryName } = req.body;
        await query.addCategory(categoryName);
        res.redirect('/db_manipulation');
    }
    catch(error){
        console.error(error);
        res.status(500).send('Error adding category');
    }
}

async function getAddBrandPage(req, res){
    try{
        res.render('add_brand', {links: links});
    }
    catch(error){
        console.error(error);
        res.status(500).send('Add Brand controller error');
    }
}

async function getAddProductFamilyPage(req, res){
    try{
        res.render('add_product_family', {links: links});
    }
    catch(error){
        console.error(error);
        res.status(500).send('Add Product Family controller error');
    }
}

async function getAddProductPage(req, res){

    try{
        res.render('add_product', {links: links});
    }
    catch(error){
        console.error(error);
        res.status(500).send('Add Product controller error');
    }
}

async function handleAddProduct(req, res) {
    try {
        const { 'product-name': productName, 'product-quantity': productQuantity, 'product-category': productCategory, 'product-price': productPrice, 'product-brand': productBrand } = req.body;
        
        // Process the form data (e.g., save to database)
        await query.addProduct({ productName, productQuantity, productCategory, productPrice, productBrand });

        res.redirect('/db_manipulation');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding product');
    }
}

async function handleAddBrand(req, res) {
    try {
        const { 'brand-name': brandName } = req.body;
        // console.log(brandName);
        
        // Process the form data (e.g., save to database)
        await query.addBrand(brandName);

        res.redirect('/db_manipulation');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding brand');
    }
}

async function handleAddProductFamily(req, res) {
    try {
        const { 'product-family-name': productFamilyName } = req.body;
        
        await query.addProductFamily(productFamilyName);

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding product family');
    }
}

 


module.exports = {
    getDBManPage, 
    getAddCategoryPage, 
    getAddBrandPage, 
    getAddProductFamilyPage, 
    getAddProductPage, 
    handleAddProduct, 
    handleAddBrand,
    handleAddCategory,
    handleAddProductFamily
};
