/**
 * Created by mirajehossain on 3/3/2017.
 */

var express = require('express');
 var router = express.Router();
var disease = require('../api/models/prescription');


 router.get('/details',disease.get);
 router.post('/details',disease.insert);
 router.put('/details/:id',disease.updatePrescription);


module.exports = router;

