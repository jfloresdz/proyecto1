'use strict';
const express = require('express');
const router = express.Router();
const proyectos = require('./proyectos.api');


router.route('/registrarProyecto')
    .post(function(req, res){
    proyectos.registrarProyecto(req, res);
});

router.route('/listarProyectos')
    .get(function(req, res){
    proyectos.listar(req, res);
});

router.route('/filtrarProyectos')
    .post(function(req, res){
    proyectos.filtrar(req, res);
});

router.route('/actualizarProyecto')
    .post(function(req, res){
    proyectos.actualizar(req, res);
});

router.route('/crearMensaje')
    .post(function(req, res){
    proyectos.crearMensaje(req, res);
});

router.route('/anadirEstudiante')
    .post(function(req, res){
    proyectos.anadirEstudiante(req, res);
});

module.exports = router;