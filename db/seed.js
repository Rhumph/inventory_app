// require('dotenv').config();
require('dotenv').config({path: "../.env"});
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const seedData = async () => {
    try {
        await pool.query('BEGIN');

        // Insert categories
        await pool.query(`
            INSERT INTO categories (category_name) VALUES 
            ('Laptops'), 
            ('Cameras'), 
            ('Drones'), 
            ('Microphones'), 
            ('Monitors'), 
            ('Desktop PCs')
        `);

        // Insert product families
        await pool.query(`
            INSERT INTO product_families (family_name) VALUES 
            ('Entertainment'), 
            ('Content Creation'), 
            ('Computers')
        `);

        // Insert brands
        await pool.query(`
            INSERT INTO brands (brand_name) VALUES 
            ('Asus'), 
            ('DJI'), 
            ('Samsung'), 
            ('Canon')
        `);

        // Insert products
        await pool.query(`
            INSERT INTO products (product_name, product_category_id_fk, product_family_id_fk, brand_id_fk, quantity, price) VALUES 
            ('Asus ZenBook', 1, 3, 1, 10, 999.99), 
            ('Canon EOS R5', 2, 2, 4, 5, 3899.99), 
            ('DJI Mavic Air 2', 3, 1, 2, 7, 799.99), 
            ('Samsung Odyssey G9', 5, 3, 3, 3, 1499.99)
        `);

        await pool.query('COMMIT');
        console.log('Data seeded successfully');
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Error seeding data:', error);
    } finally {
        pool.end();
    }
};

const addProductTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE products (
                product_id SERIAL PRIMARY KEY,
                product_name VARCHAR(255) NOT NULL,
                product_category_id_fk INT REFERENCES categories(category_id),
                product_family_id_fk INT REFERENCES product_families(family_id),
                brand_id_fk INT REFERENCES brands(brand_id),
                quantity INT,
                price DECIMAL(10, 2)
            )
        `);
        console.log('Table created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        pool.end();
    }
};

addProductTable();

// seedData();