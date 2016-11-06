var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/src/css'));

app.listen(port);
