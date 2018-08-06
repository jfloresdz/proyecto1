'use strict';

let mongoose = require('mongoose');

let ticket = new mongoose.Schema({
    titulo : {type : String, require : true},
    profesor:{type : String, require : true},
    estudiante:{type : String, require : true},
    estado:{type : String, require : true},
    descripcion : {type : String , require : true} 
});

let miembro= new mongoose.Schema({
    id_user: {type : String , require : true},
    rol : {type : String , require : true},
    estado : {type : String , require : true}
}); 

let bitacora = new mongoose.Schema({
    id_user: {type : String , require : true},
    fechaCreacion : {type : String, require : true},
    fechaFin : {type : String, require : true},
    descripcion : {type : String , require : true} 
}); 

let mensaje= new mongoose.Schema({
    id_user: {type : String , require : true},
    fechaCreacion : {type : String, require : true},
    fechaFin : {type : String, require : true},
    descripcion : {type : String , require : true} 
}); 

let proyectoShema = new mongoose.Schema({
nombre : {type : String, require : true},
empresa : {type : String, require : true},
fechaCreacion : {type : String, require : true},
fechaFin : {type : String},
descripcion : {type : String , require : true},
equipo: [miembro],
bitacoras:[bitacora],
chat: [mensaje],
tickets: [ticket],
estado: {type : String, require : true}
});
module.exports = mongoose.model('proyecto', proyectoShema);