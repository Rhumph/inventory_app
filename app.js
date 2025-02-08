const express = require("express");
const app = express();
const home_page = require('./routes/home_page_router');
const category_page = require('./routes/category_page_router');
const brand_page = require('./routes/brand_page_router');
const product_family_page = require('./routes/product_family_page_router');
const db_manipulation_page = require('./routes/db_manipulation_page_router');
const path = require("node:path");
const links = require('./routes/links');
const { body, validationResult } = require("express-validator");
// require('dotenv').config();
require('dotenv').config({path: "../.env"});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));
app.set("views", 
    [
        path.join(__dirname, "views"),
        path.join(__dirname, "views/db_man_views"),
    ]);
app.set("view engine", "ejs");

app.use('/', home_page);
app.use('/category', category_page);
app.use('/brand', brand_page);
app.use('/product_family', product_family_page);
app.use('/db_manipulation', db_manipulation_page);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


