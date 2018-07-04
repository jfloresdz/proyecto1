'use strict';
let mongoose = require('mongoose');

let profesorSchema = new mongoose.Schema({
    nombre_completo : {type : String, required : true},
    profesion: {type : String, required : true},
    telefono : {type : String, required : true},
    correo : {type : String, required: true},
    experiencia : {type : Number, required : true},
    cursos: {type : [], required: true},
    cedula : {type : Number, required : true},
    contrasenna : {type : String, required : true}
});

module.exports = mongoose.model('Profesor', profesorSchema);