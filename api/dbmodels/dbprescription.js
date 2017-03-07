/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName ='prescription' ;
var diseaseStructure = [ "age", "feelings", "problem", "medicine","description"];
var diseaseModel = {};

diseaseModel.setPrescription= function (data, callback) {

    console.log(diseaseStructure);
    console.log(data);

    var insertData = [];
    for(var i in diseaseStructure){
        var item  = diseaseStructure[i];
        insertData.push(data[item]);
    }


    db.run("INSERT into prescription(" + diseaseStructure.join(",") + ") VALUES (?,?,?,?,?)",insertData,callback);
   // db.run("INSERT into prescription(age,feelings) VALUES (?,?)",["dddd", "hhgg"],callback);
};

diseaseModel.getPrescription = function (callback) {
   // db.all("SELECT ID "+ diseaseStructure.join(",")+ " FROM "+ tableName,callback);
    db.all("SELECT * FROM "+ tableName,callback);
}


module.exports = diseaseModel;