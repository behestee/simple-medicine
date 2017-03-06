/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName ='prescription' ;
var recordStructure = ['id', 'DiseaseName', 'Duration', 'Degree', 'Medicine','Description'];
var diseaseModel = {};

diseaseModel.insertPrescription= function (data, callback) {
// db.run("INSERT INTO "+ tableName+" ('"+ recordStructure.join("','")+ "') VALUES  (?,?,?,?,?,?)");
    db.run("INSERT INTO "+ tableName+" ('"+ recordStructure.join("','")+ "') VALUES  ('1','fever','3 days',102,'napa extra','keep running medicine')" );
};

diseaseModel.getPrescription = function (callback) {
    db.all("SELECT ID"+ recordStructure.join(",")+ "FROM"+ tableName,callback);
}


module.exports = diseaseModel;