'use strict'
const express = require('express');
const router = express.Router();
const bitacoraApi = require('./bitacora.api');

router.route('/registrar_bitacora')
.post(function(req, res){
    bitacoraApi.registrar(req, res);
});

module.exports = router;