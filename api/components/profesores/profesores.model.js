'use strict';
let mongoose = require('mongoose');


let titulos = new mongoose.Schema({
    inicio:{type : String, required : true},
    fin:{type : String, required : true},
    universidad:{type : String, required : true},
    grado:{type : String, required : true},
    carrera:{type : String, required : true}
});

let profesorSchema = new mongoose.Schema({
    nombre:{type : String, required : true},
    profesion:{type : String},
    telefono:{type : String, required : true},
    correo:{type : String, required: true},
    experiencia:{type : Number, required : true},
    fechaNacimiento:{type : String, required : true},
    cursos:{type : []},
    titulos: titulos,
    foto:{type : String, required:false},
    direccion:{type : String, required: true},
    cedula:{type : Number, required : true},
    contrasena:{type : String, required : true},
    activado:{type : String, required : true}
});

module.exports = mongoose.model('Profesor', profesorSchema);