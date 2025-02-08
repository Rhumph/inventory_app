require('dotenv').config();
// require('dotenv').config({path: "../.env"});

const { Pool } = require('pg');


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_DATABASE:', process.env.DB_DATABASE);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_PORT:', process.env.DB_PORT);
module.exports = pool;