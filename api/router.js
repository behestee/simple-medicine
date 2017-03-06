/**
 * Created by mirajehossain on 3/3/2017.
 */

var express = require('express');
var apiRouter = require('../api/apirouter');
function route(app) {
    app.use('/api',apiRouter)
}

module.exports = route;