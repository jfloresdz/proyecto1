'use strict';

const express = require('express');
const router = express.Router();

const datosApi = require('./login.api');

router.route('/login')
.post(function(req, res){
    datosApi.login(req, res);
});

module.exports = router;