'use strict';
//DEPENDENCIA
let mongoose = require('mongoose');

let estudianteSchema = new mongoose.Schema({
    nombre : {type : String, require : true},
    cedula : {type : String, require : true},
    telefono : {type : String, require : true},
    correo : {type : String, required : true},
    fechaNc : {type : String, required : true},
    estadoCivil : {type : String, required : true}, 
    nacionalidad : {type : String, required : true},
    lugarResidencia : {type : String, required : true},
    contactoEmer : {type : String, required : true},
    TelEmer : {type : String, required : true},
    
});

module.exports = mongoose.model('Estudiante', estudianteSchema);