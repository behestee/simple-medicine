/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName = 'feelings';
var diseaseStructureColumns = ["feeling"];
var feelingsModel = {};

feelingsModel.setFeelings = function (data, callback) {
    var insertData = feelingsModel.columnDataProcess(diseaseStructureColumns, data);
    db.run("INSERT into feelings(" + diseaseStructureColumns.join(",") + ") VALUES (?)", insertData, callback);
};

feelingsModel.getFeelings = function (callback) {
    db.all("SELECT * FROM " + tableName, callback);
};
feelingsModel.putFeelings = function (id, feelings, callback) {
    var updateData = feelingsModel.columnDataProcess(diseaseStructureColumns, feelings);
    db.run("UPDATE feelings SET " + diseaseStructureColumns.join(" = ?, ") + " = ? WHERE ID = " + id, updateData, callback);

};
feelingsModel.deleteFeelings = function (id, callback) {
    console.log("form db",id);
    db.run("DELETE FROM feelings WHERE ID =? ", [id], callback);
};


feelingsModel.columnDataProcess = function (collNameList, dataArr) {

    var outputData = [];
    for (var i in collNameList) {
        var item = collNameList[i];
        outputData.push(dataArr[item]);
    }
    return outputData;
}


module.exports = feelingsModel;