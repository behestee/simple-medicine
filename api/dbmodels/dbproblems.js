/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName = 'problems';
var problemsStructureColumns = ["problem"];
var problemModel = {};

problemModel.setProblems = function (data, callback) {
    var insertData = problemModel.columnDataProcess(problemsStructureColumns, data);
    db.run("INSERT into problems(" + problemsStructureColumns.join(",") + ") VALUES (?)", insertData, callback);
};

problemModel.getProblems = function (callback) {
    db.all("SELECT * FROM " + tableName, callback);
};
problemModel.putProblems = function (id, problems, callback) {
    var updateData = problemModel.columnDataProcess(problemsStructureColumns,problems);
    db.run("UPDATE problems SET " + problemsStructureColumns.join(" = ?, ") + " = ? WHERE ID = " + id, updateData, callback);
};
problemModel.deleteProblems = function (id, callback) {
    console.log("form db",id);
    db.run("DELETE FROM problems WHERE ID =? ", [id], callback);
};


problemModel.columnDataProcess = function (collNameList, dataArr) {

    var outputData = [];
    for (var i in collNameList) {
        var item = collNameList[i];
        outputData.push(dataArr[item]);
    }
    return outputData;
}


module.exports = problemModel;