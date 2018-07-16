'use strict';
const ticketsModel = require('./tickets.model');

module.exports.registrarTickets = function (req , res)
{
    let nuevoTicket = new ticketsModel({  
    nombreTicket : req.body.nombreTicket,
    nombreProyecto : req.body.nombreProyecto,
    nombreEncargado : req.body.nombreEncargado,
    telefono : req.body.telefono,
    descripcion : req.body.descripcion       
    });

  console.log(nuevoTicket);
   nuevoTicket.save(function(error)
   {
    if(error) {
    res.json
        ({ succes : false, msj : 'El ticket no pudo ser registrado : ' + error})     
    }else{
    res.json
        ({ succes : true, msj : 'El ticket se registro exitosamente'}) 
        }    
   });
};

module.exports.listar = function(req, res){
    ticketsModel.find().then(
        function(tickets){
            res.send(tickets);
        });
};