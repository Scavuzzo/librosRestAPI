var express = require('express');
var app = express();
// Importamos la conexión a la base de datos
var db = require('./db');
const port = process.env.PORT || 8181;

// El archivo que tiene todo el armado de la Rest API
var librosController = require('./libros/librosController');

app.get('/' , (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// La Rest API queda en /api/
app.use('/api', librosController);

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});