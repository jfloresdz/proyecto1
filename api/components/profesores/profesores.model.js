'use strict';
let mongoose = require('mongoose');

let profesorSchema = new mongoose.Schema({
    nombre_completo : {type : String, required : true},
    profesion : {type : String},
    universidad : {type : String},
    telefono : {type : String, required : true},
    correo : {type : String, required: true},
    experiencia : {type : Number, required : true},
    fechaNacimiento: {type : String, required : true},
    cursos: {type : []},
    titulos : {type : []},
    foto: {type : String, required:false},
    provincia : {type : String, required: true},
    direccion : {type : String, required: true},
    cedula : {type : Number, required : true},
    contrasenna : {type : String, required : true}
});

module.exports = mongoose.model('Profesor', profesorSchema);