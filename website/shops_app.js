var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var publicDir = require('path').join(__dirname,'/air_shops');
app.use(express.static(publicDir));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/air_shops/shops.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(6999, function () {
    console.log('Node server is running for Airport Management Website - Shops and Services.....');
});
