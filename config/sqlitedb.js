var path = require('path');
var dbPath = path.resolve(__dirname, 'db/medicineDB.db');

var sqlite3 = require('sqlite3').verbose();
module.exports = new sqlite3.Database(dbPath);

// module.exports = new sqlite3.Database('chain.sqlite3');

