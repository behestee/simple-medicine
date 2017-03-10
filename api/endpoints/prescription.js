/**
 * Created by mirajehossain on 3/3/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

// var db = require('/config/db/medicineDB.db');
var diseaseModel = require('../dbmodels/dbprescription');
var disease = {}
disease.getData = function (req, res) {
    diseaseModel.getPrescription(function (error, prescription) {
        if (error) {
            throw error;
        }
        res.json(prescription);
    })
};

disease.setData = function (req, res) {
    var params = req.body;
    console.log(params);
    diseaseModel.setPrescription(params, function (error, insertData) {
        if (error) {
            throw error;
        }
        res.json(insertData)
    });

};

disease.updateData = function (req, res) {
    var prescription = req.body;
    var ID = prescription.id;
    console.log("prescription ID1 :-  ",ID);

    diseaseModel.putPrescription(ID,prescription,function (error, prescriptionData) {
        if(error){
            throw error;
        }
        res.json(prescriptionData);
        console.log("success "+prescriptionData);
    });


};
disease.deleteData = function (req, res) {
    var id = req.params.id;
    console.log(id);

    diseaseModel.deletePrescription(id,function (error, deleteData) {

        if (error) {
            throw error;
        }
        res.send(deleteData);
    })
};


module.exports = disease;