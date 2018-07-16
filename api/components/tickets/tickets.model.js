'use strict';

let mongoose = require('mongoose');

let ticketShema = new mongoose.Schema({
nombreTicket : {type : String, require : true},
nombreProyecto : {type : String,  require : true },
nombreEncargado : {type : String,  require : true},
telefono : {type : String , require : true},
descripcion : {type : String , require : true}
});
module.exports = mongoose.model('Tickets', ticketShema);