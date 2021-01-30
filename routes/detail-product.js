const request = require('request');

function getDetailProduct(app) {
    app.get('/api/items/:id', function (req, res) {

        let options = {
            url: `https://api.mercadolibre.com/items/${req.params.id}`,
            headers: { 'Content-Type': 'application/json' }
        };
        request(options).pipe(res);
    });
}

function getDetailDescriptionProduct(app) {
    app.get('/api/items/:id/description', function (req, res) {

        let options = {
            url: `https://api.mercadolibre.com/items/${req.params.id}/description`,
            headers: { 'Content-Type': 'application/json' }
        };

        request(options).pipe(res);
    });
}

module.exports = {
    getDetailProduct,
    getDetailDescriptionProduct
}