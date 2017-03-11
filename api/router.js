/**
 * Created by mirajehossain on 3/3/2017.
 */

var express = require('express');
var prescriptionEndPoint = require('./endpoints/prescription');
var feelingsEndPoint = require('./endpoints/feelings');
var problemsEndPoint = require('./endpoints/problems');

function route(app) {
    app.post('/api/db/prescription', prescriptionEndPoint.setData);//okay
    app.get('/api/db/prescription', prescriptionEndPoint.getData);// okay
    app.put('/api/db/prescription', prescriptionEndPoint.updateData); //okay
    app.delete('/api/db/prescription/:id', prescriptionEndPoint.deleteData); // okay

    app.post('/api/db/feelings', feelingsEndPoint.setData);//okay
    app.get('/api/db/feelings', feelingsEndPoint.getData);// okay
    app.put('/api/db/feelings', feelingsEndPoint.updateData); //okay
    app.delete('/api/db/feelings/:id', feelingsEndPoint.deleteData); // okay

    app.post('/api/db/problems', problemsEndPoint.setData);//okay
    app.get('/api/db/problems', problemsEndPoint.getData);// okay
    app.put('/api/db/problems', problemsEndPoint.updateData); //okay
    app.delete('/api/db/problems/:id', problemsEndPoint.deleteData); // okay

}
module.exports = route;