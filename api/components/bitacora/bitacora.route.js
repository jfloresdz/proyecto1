'use strict'
const express = require('express');
const router = express.Router();
const bitacoraApi = require('./bitacora.api');

router.route('/registrarBitacora')
.post(function(req, res){
    bitacoraApi.registrar(req, res);
});

router.route('/listarBitacoras')
    .get(function(req, res){
    bitacoraApi.listar(req, res);
});


module.exports = router;