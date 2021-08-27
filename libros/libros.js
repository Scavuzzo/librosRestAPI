var mongoose = require('mongoose');
var librosSchema = new mongoose.Schema({
    isbn: {
        type: String,
        unique: true
    },
    titulo: String,
    autor: String,
    year: Number,
    editorial: String 
});
mongoose.model('libros', librosSchema);
// Exportamos como módulo - Libros--> nombre de la colección.
module.exports = mongoose.model('libros');