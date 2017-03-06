/**
 * Created by mirajehossain on 3/3/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

// var db = require('/config/db/medicineDB.db');
var diseaseModel = require('../dbmodels/dbprescription');
var disease = {}
disease.get = function (req, res) {
    /*    var prescription = {
     'id': '1',
     'DiseaseName': 'faver',
     'Duration': '1-3',
     'Degree': '103',
     'Medicine': 'Napa extra, paracitamol',
     'Description': 'please take your medicine properly, if any more problem then contact with consultant'
     }
     console.log(prescription)
     res.json(prescription);

     */
    console.log('request URL:', req.originalUrl);
    diseaseModel.insertPrescription(function (error, prescription) {
        if (error) {
            throw error;
        }
        res.json(prescription)
    })

};

disease.insert = function (req, res) {
    var data = req.body;
    diseaseModel.insertPrescription(data, function (error, insertData) {
        if (error) {
            throw error;
        }
        res.json(insertData)
    });
};

disease.updatePrescription = function (req, res) {

    var id = req.params.id;
    var prescription = req.body;
    prescription.findById(id, function (error, data) {
        data.DiseaseName = req.body.DiseaseName;
        data.Duration = req.body.Duration;
        data.Medicine = req.body.Medicine;
        data.Brief = req.body.Brief;
    });
    prescription.save(function (error) {
        if (error)
            res.send(error);

        res.json({message: 'prescription updated!'});
    })
};
disease.delete= function (req, res) {
    var id = req.params.id;
    diseaseModel.deletePrescription(id,function (error, deleteData) {
        if (error){
            throw error;
        }
        res.json(deleteData);
    })
}



module.exports = disease;