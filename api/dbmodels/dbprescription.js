/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName = 'prescription';
var diseaseStructureColumns = ["age", "feeling", "problem", "medicine", "description"];
var diseaseModel = {};

diseaseModel.setPrescription = function (data, callback) {
    console.log("form db ", data)
    var insertData = diseaseModel.columnDataProcess(diseaseStructureColumns, data);
    db.run("INSERT into prescription(" + diseaseStructureColumns.join(",") + ") VALUES (?,?,?,?,?)", insertData, callback);
};

diseaseModel.getPrescription = function (callback) {
    db.all("SELECT * FROM " + tableName, callback);
};
diseaseModel.putPrescription = function (id, disease, callback) {
    var updateData = diseaseModel.columnDataProcess(diseaseStructureColumns, disease);
    db.run("UPDATE prescription SET " + diseaseStructureColumns.join(" = ?, ") + " = ? WHERE ID = " + id, updateData, callback);
};
diseaseModel.deletePrescription = function (id, callback) {
    console.log("form db", id);
    db.run("DELETE FROM prescription WHERE ID =? ", [id], callback);
};


diseaseModel.columnDataProcess = function (collNameList, dataArr) {

    var outputData = [];
    for (var i in collNameList) {
        var item = collNameList[i];
        outputData.push(dataArr[item]);
    }
    return outputData;
}


module.exports = diseaseModel;