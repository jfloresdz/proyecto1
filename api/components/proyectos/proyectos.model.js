'use strict';

let mongoose = require('mongoose');

let proyectoShema = new mongoose.Schema;({
nombre : {type : String, require : true},
numeroCedula : {type : String,  require : true },
telefonos : {type : String,  require : true},
email : {type : String , require : true},
empresa : {type : String, require : true}, 
fechaCreacion : {type : Date, require : true},
fechaFin : {type : Date, require : true},
ubicacion : {type : String, require : true},
descripcion : {type : String , require : true} 
});
module.exports = mongoose.model('proyecto', proyectoShema);