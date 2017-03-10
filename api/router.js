/**
 * Created by mirajehossain on 3/3/2017.
 */

var express = require('express');
var databaseEndPoint = require('./endpoints/prescription');

function route(app) {
    app.post('/api/db/prescription',databaseEndPoint.setData);//okay
    app.get('/api/db/prescription',databaseEndPoint.getData);// okay
    app.put('/api/db/prescription',databaseEndPoint.updateData); //okay
    app.delete('/api/db/prescription/:id',databaseEndPoint.deleteData); // okay


   // app.get('/api/db/feelings', callback)
}

module.exports = route;