'use strict';

const express = require('express');
const router = express.Router();

const datosApi = require('./estudiante.api');

router.route('/registrarEstudiante')
.post(function(req, res){
    datosApi.registrar(req, res);
});

router.route('/listarEstudiantes')
    .get(function(req, res){
    datosApi.listar(req, res);
});

module.exports = router;