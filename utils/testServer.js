const express = require('express');
const superTest = require('supertest');


function testserver(route) {
    const app = express()
    route(app);
    return superTest(app);
}

module.exports = testserver;