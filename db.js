var mongoose = require('mongoose');
const conexion = "mongodb+srv://lauti:1234@proyectolibros.jbsm0.mongodb.net/test";
mongoose.connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true });