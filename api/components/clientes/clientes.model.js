'use strict'
let mongoose = required('mongoose');

let clienteSchema = mongoose.Schema({
    nombre:{type: String, unique: true, required:true},
    cedula: { type: number, unique: true, required: true },
    telefono: { type: number, required: true },
    correo: { type: String, required: true },
    pais: { type: String, required: true },
    redes: { type: String, required: true }
});

mongoose.exports = mongoose.model('Cliente', clienteSchema);