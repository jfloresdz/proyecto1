'use strict';
const express = require('express');
const router = express.Router();
const proyectos = require('./proyectos.api');


router.route('/registrar_proyectos')
    .post(function(req, res){
    proyectos.registrarProyecto(req, res);
});

router.route('/listarProyectos')
    .get(function(req, res){
    proyectos.listar(req, res);
});


module.exports = router;