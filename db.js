var mongoose = require('mongoose');
const conexion = process.env.MONGOURL || "mongodb://localhost:27017/proyectolibros";
mongoose.connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true });