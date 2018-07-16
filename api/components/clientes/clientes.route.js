const express = require('express');
const router = express.Router();
const clientes = require('./clientes.api');

router.route('/registrar_clientes')
    .post(function(req, res){
    proyectos.registrarProyecto(req, res);
});

router.route('/listar_clientes')
    .get(function(req, res){
    proyectos.listar(req, res);
});


module.exports = router;