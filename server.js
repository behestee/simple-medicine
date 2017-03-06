// modules =================================================
var express        = require('express');
var bodyParser     = require('body-parser');
var app            = express();

// set our port
var port = process.env.PORT || 3030;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/app'));



// routes ==================================================
require('./api/router')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('Please open the URL: http://localhost:' + port);

// expose app
exports = module.exports = app;
