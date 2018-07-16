'use strict';
const express = require('express');
const router = express.Router();
const tickets = require('./tickets.api');


router.route('/registrar_tickets')
    .post(function(req, res){
    tickets.registrarTickets(req, res);
});

router.route('/listar_tickets')
    .get(function(req, res){
    tickets.listar(req, res);
});


module.exports = router;