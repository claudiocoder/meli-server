const async = require('async');
const request = require('request');
const parsedDetailProduct = require('../models/detailProducts');

function getDetailProduct(app) {
    app.get('/api/items/:id', function (req, res) {

        let products = {}
        const urls = [
            `https://api.mercadolibre.com/items/${req.params.id}`,
            `https://api.mercadolibre.com/items/${req.params.id}/description`,
        ];

        function httpGet(url, callback) {
            const options = {
                url: url,
                json: true
            };
            request(options,
                function (err, res, body) {
                    callback(err, body);
                }
            );
        }
        async.map(urls, httpGet, function (err, response) {
            if (err) return console.log(err);
            products = response;
            res.send(parsedDetailProduct(products))
        });
    });
}

module.exports = getDetailProduct