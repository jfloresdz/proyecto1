const express = require('express');
const router = express.Router();
const clientes = require('./clientes.api');

router.route('/registrarClientes')
    .post(function(req, res){
    clientes.registrar(req, res);
});

router.route('/listarClientes')
    .get(function(req, res){
    clientes.listar(req, res);
});


module.exports = router;