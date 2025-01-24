// req routes;
    // home_page
    // category_page
    // brand_page
    // product_family_page
    // entity_manipulation_page

const express = require("express");
const app = express();
const home_page = require('./routes/home_page_router');
const category_page = require('./routes/category_page');
const brand_page = require('./routes/brand_page');
const product_family_page = require('./routes/product_family_page');
const db_manipulation_page = require('./routes/db_manipulation_page');
const path = require("node:path");
const links = require('./routes/links');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', home_page);
// app.get('/category', category_page);
// app.get('/brand', brand_page);
// app.get('/product_family', product_family_page);
// app.get('/db_manipulation', db_manipulation_page);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


