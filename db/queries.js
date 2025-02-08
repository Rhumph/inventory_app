const pool = require('./pool');

// create basic CRUD functions

async function addCategory(categoryName) {
    const queryText = 'INSERT INTO categories (category_name) VALUES ($1) RETURNING category_id';
    const values = [categoryName];
    const { rows } = await pool.query(queryText, values);
    return rows[0].category_id;
}

async function addBrand(brandName) {
    const queryText = 'INSERT INTO brands (brand_name) VALUES ($1) RETURNING brand_id';
    const values = [brandName];
    const { rows } = await pool.query(queryText, values);
    return rows[0].brand_id;
}

async function addProduct(product) {
    const { productName, productQuantity, productCategory, productPrice, productBrand } = product;
    let categoryId = await getCategoryByName(productCategory);
    if (!categoryId) {
        categoryId = await addCategory(productCategory);
    }
    let brandId = await getBrandByName(productBrand);
    if (!brandId) {
        brandId = await addBrand(productBrand);
    }

    const queryText = 'INSERT INTO products (product_name, quantity, product_category_id_fk, price, brand_id_fk) VALUES ($1, $2, $3, $4, $5)';
    const values = [productName, productQuantity, categoryId, productPrice, brandId];
    await pool.query(queryText, values);
}

async function addProductFamily(productFamily) {
    const queryText = 'INSERT INTO product_families (family_name) VALUES ($1) RETURNING family_id';
    const values = [productFamily];
    const { rows } = await pool.query(queryText, values);
    return rows[0].product_family_id;
}

async function getProductFamilyByName(productFamilyId) {
    const queryText = 'SELECT family_name FROM product_families WHERE family_id = $1';
    const values = [productFamilyId];
    const { rows } = await pool.query(queryText, values);
    return rows[0].family_name;
}

async function getCategoryByName(categoryName) {
    const queryText = 'SELECT category_id FROM categories WHERE category_name = $1';
    const values = [categoryName];
    const { rows } = await pool.query(queryText, values);
    return rows[0] ? rows[0].category_id : null;
}

async function getBrandByName(brandName) {
    const queryText = 'SELECT brand_id FROM brands WHERE brand_name = $1';
    const values = [brandName];
    const { rows } = await pool.query(queryText, values);
    return rows[0] ? rows[0].brand_id : null;
}

async function getAllProducts(){ 
    const { rows } = await pool.query('SELECT * FROM products');
    return rows;
}

async function deleteProduct(id) {
    try {
        const result = await pool.query('DELETE FROM products WHERE product_id = $1', [id]);
        return result.rowCount;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

async function getAllBrands (){ 
    const { rows } = await pool.query('SELECT * FROM brands');
    return rows;
}

async function getAllCategories (){ 
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
}

async function getAllProductFamilies (){
    const { rows } = await pool.query('SELECT * FROM product_families');
    return rows;
}

module.exports = {
    addProduct,
    getAllProducts,
    deleteProduct,
    getCategoryByName,
    addBrand,
    addCategory,
    addProductFamily,
    getProductFamilyByName,
    getAllBrands,
    getAllCategories,
    getAllProductFamilies
};