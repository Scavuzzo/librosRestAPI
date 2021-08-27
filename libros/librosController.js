const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importamos como módulo el esquema
var Lib = require('./libros');

// Todas las movies
app.get('/', (req, res) => {
    // Habilitamos CORS para que se pueda obtener la info desde cualquier dominio
    res.header('Access-Control-Allow-Origin', '*');
    Lib.find({}, (err, movies) => {
        if (err) return res.status(500).send({ "error": "Problemas buscando todos los libros en la base de datos" });
        res.status(200).send(movies);
    });
});

app.get('/isbn/:isbn', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Lib.findOne({ isbn: req.params.isbn }, (err, libro) => {
        if (err) return res.status(500).send({ "error": "Problemas buscando este ISBN en la base de datos" });
        if (!libro) return res.status(404).send({ "error": "404" });
        res.status(200).send(libro);
    });
});

app.get('/titulo/:titulo', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Lib.find({ titulo: req.params.titulo }, (err, libro) => {
        if (err) return res.status(500).send({ "error": "Problemas buscando este titulo en la base de datos" });
        if (!libro) return res.status(404).send("No se ha encontrado el siguiente titulo: " + req.params.titulo);
        res.status(200).send(libro);
    });
});

app.get('/autor/:autor', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Lib.find({ autor: req.params.autor }, (err, libro) => {
        if (err) return res.status(500).send("Problemas buscando este autor en la base de datos");
        if (!libro) return res.status(404).send("No se han encontrado titulos con el siguiente autor: " + req.params.autor);
        res.status(200).send(libro);
    });
});

app.get('/year/:year', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Lib.find({ year: req.params.year }, (err, libro) => {
        if (err) return res.status(500).send("Problemas buscando este año en la base de datos");
        if (!libro) return res.status(404).send("No se han encontrado titulos con el siguiente año: " + req.params.year);
        res.status(200).send(libro);
    });
});

app.get('/editorial/:editorial', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Lib.find({ editorial: req.params.editorial }, (err, libro) => {
        if (err) return res.status(500).send("Problemas buscando esta editorial en la base de datos");
        if (!libro) return res.status(404).send("No se han encontrado titulos de la siguiente editorial: " + req.params.editorail);
        res.status(200).send(libro);
    });
});

module.exports = app;