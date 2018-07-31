'use strict'
let mongoose = require('mongoose');

let contactoCliente = mongoose.Schema({
    nombre:{type: String, required:true},
    correo:{ type: String, required: true },
    telefono:{type: String, required:true}
});

let clienteSchema = mongoose.Schema({
    nombre:{type: String, required:true},
    cedula: { type: Number, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    foto:{ type: String, required: false },
    contacto: contactoCliente,
    activado:{type : String, required : true}
});

module.exports = mongoose.model('Cliente', clienteSchema);