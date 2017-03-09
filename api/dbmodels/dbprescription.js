/**
 * Created by mirajehossain on 3/6/2017.
 */
var db = require('../../config/sqlitedb.js');
var tableName ='prescription' ;
var diseaseStructureColumns = [ "age", "feelings", "problem", "medicine","description"];
var diseaseModel = {};

diseaseModel.setPrescription= function (data, callback) {
    console.log(diseaseStructureColumns);
    console.log(data);
    var insertData = [];
    for(var i in diseaseStructureColumns){
        var item  = diseaseStructureColumns[i];
        insertData.push(data[item]);
    }
    db.run("INSERT into prescription(" + diseaseStructureColumns.join(",") + ") VALUES (?,?,?,?,?)",insertData,callback);
   // db.run("INSERT into prescription(age,feelings) VALUES (?,?)",["dddd", "hhgg"],callback);
};

diseaseModel.getPrescription = function (callback) {
   // db.all("SELECT ID "+ diseaseStructureColumns.join(",")+ " FROM "+ tableName,callback);
    db.all("SELECT * FROM "+ tableName,callback);
};
diseaseModel.putPrescription = function (id,callback) {
     //   var updateData = data.id;
       // console.log("id form dbModel in db call"+ updateData);
    console.log(id);
    db.run("UPDATE prescription SET "+diseaseStructureColumns.join(" = ?, ")+ " = ? WHERE ID = "+id,callback);

   // db.run("UPDATE " + tableName + " SET " + diseaseStructureColumns.join(" = ?, ") + " WHERE id = ?", values, callback );


}


module.exports = diseaseModel;