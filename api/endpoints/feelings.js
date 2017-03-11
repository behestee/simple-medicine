/**
 * Created by mirajehossain on 3/3/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

// var db = require('/config/db/medicineDB.db');
var feelingsModel = require('../dbmodels/dbfeelings');
var feelings = {}
feelings.getData = function (req, res) {
    feelingsModel.getFeelings(function (error, feelings) {
        if (error) {
            throw error;
        }
        res.json(feelings);
    })
};

feelings.setData = function (req, res) {
    var params = req.body;
    console.log(params);
    feelingsModel.setFeelings(params, function (error, insertData) {
        if (error) {
            throw error;
        }
        res.json(insertData);
        console.log("new feelings added",res.json(insertData));
    });

};

feelings.updateData = function (req, res) {
    var feelings = req.body;
    var ID = feelings.id;
    console.log("feelings ID1 :-  ",ID);

    feelingsModel.putFeelings(ID,feelings,function (error, FeelingsData) {
        if(error){
            throw error;
        }
        res.json(FeelingsData);
        console.log("success "+FeelingsData);
    });


};
feelings.deleteData = function (req, res) {
    var id = req.params.id;
    console.log(id);

    feelingsModel.deleteFeelings(id,function (error, deleteData) {

        if (error) {
            throw error;
        }
        res.send(deleteData);
        console.log("delete feelings ",deleteData)
    })
};


module.exports = feelings;