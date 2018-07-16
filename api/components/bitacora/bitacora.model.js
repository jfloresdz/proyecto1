'use strict'
//Se importa la dependencia de mongoose y permite la coneccion co la BD
let mongoose = require('mongoose');

//Donde se van a guardar los datos
let bitacoraSchema = new mongoose.Schema({
    //propiedades en formato json
    EscogerProyecto : {type : String, required : true},
    HorasLaboradas : {type : String, required : true},
    Observaciones : {type : String, required : true},
    TotalHoras : {type : Number, required : true}
});
                            // no de refencia
module.exports = mongoose.model('Bitacoras', bitacoraSchema);