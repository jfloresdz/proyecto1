'use strict';

const express = require('express');
const router = express.Router();

const datosApi = require('./estudiante.api');

router.route('/registrar_estudiante')
.post(function(req, res){
    datosApi.registrar(req, res);
});

module.exports = router;