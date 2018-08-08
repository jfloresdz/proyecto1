'use strict';
const express = require('express');
const router = express.Router();
const profesores = require('./profesores.api');


router.route('/registrarProfesor')
    .post(function(req, res){
    profesores.registrar(req, res);
});

router.route('/listarProfesores')
    .get(function(req, res){
    profesores.listar(req, res);
});

router.route('/filtrarProfesores')
    .post(function(req, res){
    profesores.filtrar(req, res);
});

router.route('/actualizarProfesor')
    .post(function(req, res){
    profesores.actualizar(req, res);
});

module.exports = router;