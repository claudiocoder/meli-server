const async = require('async');
const request = require('request');
const parsefunction = require('../services/parseProducts');

function getAllProducts(app) {
    app.get('/api/items/', function (req, res, next) {
        let products = {}

        const urls = [
            `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.query}`
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
            if (err) return next(err)
            products = response;
            res.send(parsefunction(products))
        });
    });
}

module.exports = getAllProducts;