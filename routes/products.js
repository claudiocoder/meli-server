const request = require('request');

function getAllProducts(app) {
    app.get('/api/items/', function (req, res) {
        let options = {
            url: 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.query,
            headers: { 'Content-Type': 'application/json' }
        };
        request(options).pipe(res);
    });
}

module.exports = getAllProducts;