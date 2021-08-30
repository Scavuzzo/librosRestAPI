var mongoose = require('mongoose');
const conexion = process.env.MONGOURL || "mongodb+srv://lauti:1234@proyectolibros.jbsm0.mongodb.net/test";
mongoose.connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true });