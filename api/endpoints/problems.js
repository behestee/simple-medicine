/**
 * Created by mirajehossain on 3/3/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

// var db = require('/config/db/medicineDB.db');
var problemsModel = require('../dbmodels/dbproblems');
var problems = {}
problems.getData = function (req, res) {
    problemsModel.getProblems(function (error, problems) {
        if (error) {
            throw error;
        }
        res.json(problems);
    })
};

problems.setData = function (req, res) {
    var params = req.body;
    console.log(params);
    problemsModel.setProblems(params, function (error, insertData) {
        if (error) {
            throw error;
        }
        res.json(insertData)
    });

};

problems.updateData = function (req, res) {
    var problems = req.body;
    var ID = problems.id;
    console.log("Problems ID1 :-  ",ID);

    problemsModel.putProblems(ID,problems,function (error, ProblemsData) {
        if(error){
            throw error;
        }
        res.json(ProblemsData);
        console.log("success "+ProblemsData);
    });


};
problems.deleteData = function (req, res) {
    var id = req.params.id;
    console.log(id);
    problemsModel.deleteProblems(id,function (error, deleteData) {

        if (error) {
            throw error;
        }
        res.send(deleteData);
    })
};


module.exports = problems;