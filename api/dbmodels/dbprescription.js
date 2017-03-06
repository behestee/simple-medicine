/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName ='prescription' ;
var recordStructure = [ 'diseaseName', 'duration', 'degree', 'medicine','description'];
var diseaseModel = {};

diseaseModel.setPrescription= function (data, callback) {
    db.run("INSERT into prescription('"+recordStructure.join('","')+"') VALUES (?,?,?,?,?)",data);




};

diseaseModel.getPrescription = function (callback) {
    db.all("SELECT ID "+ recordStructure.join(",")+ " FROM "+ tableName,callback);
}


diseaseModel.getAll = function (callback) {

    db.all("SELECT id, " + recordStructure.join(", ") + " FROM " + tableName, callback);
};

module.exports = diseaseModel;