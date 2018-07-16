'use strict'
let mongoose = require('mongoose');

let clienteSchema = mongoose.Schema({
    nombre:{type: String, required:true},
    cedula: { type: Number, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },
    pais: { type: String, required: true },
    redes: { type: String, required: false }
});

module.exports = mongoose.model('Cliente', clienteSchema);