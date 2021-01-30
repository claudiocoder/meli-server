const express = require('express');
const app = express();

const { config } = require('./config/index');

const { getDetailProduct, getDetailDescriptionProduct } = require('./routes/detail-product');
const getAllProducts = require('./routes/products');


getAllProducts(app);
getDetailProduct(app);
getDetailDescriptionProduct(app);

app.listen(config.port, function () {
    console.log(`Listen ${config.port}`);
});