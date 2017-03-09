/**
 * Created by mirajehossain on 3/3/2017.
 */

var express = require('express');
var databaseEndPoint = require('./endpoints/prescription');

function route(app) {
    app.post('/api/db',databaseEndPoint.setData);//okay
    app.get('/api/db',databaseEndPoint.getData);// okay
    app.put('/api/db',databaseEndPoint.updateData);
}

module.exports = route;