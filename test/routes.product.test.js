const assert = require('assert');
const proxyquire = require('proxyquire');

const MOCK_PRODUCT = require('../utils/mocks/products');
const MOCK_DETAIL_PRODUCT = require('../utils/mocks/detailProducts');
const testserver = require('../utils/testServer');


describe('routes - products', function () {
    const route = proxyquire('../routes/products', {
        './products': MOCK_PRODUCT,
    });

    const request = testserver(route);


    describe('GET /api/', () => {
        it('should response 200', function (done) {
            request.get('/api/items').expect(200, done);
        });

        it('should response with the list of the products', function (done) {
            request.get('/api/items?query=silla').end((err, res) => {
                assert.deepStrictEqual(res.body, { MOCK_PRODUCT });
            });
            done()
        });
    })
});

describe('routes - products', function () {
    const route = proxyquire('../routes/detail-product', {
        './detail-product': MOCK_DETAIL_PRODUCT
    });

    const request = testserver(route);


    describe('GET /api/', () => {
        it('should response with the list of the detail products', function (done) {
            request.get('/api/items/MLA899752125').end((err, res) => {
                assert.deepStrictEqual(res.body, { MOCK_DETAIL_PRODUCT });
            });
            done()
        });
    })
});