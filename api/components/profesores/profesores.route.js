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
    .get(function(req, res){
    profesores.filtrar(req, res);
});

module.exports = router;