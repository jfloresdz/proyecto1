'use strict';
const express = require('express');
const router = express.Router();
const tickets = require('./tickets.api');


router.route('/registrarTickets')
    .post(function(req, res){
    tickets.registrarTickets(req, res);
});

router.route('/listarTickets')
    .get(function(req, res){
    tickets.listar(req, res);
});


module.exports = router;