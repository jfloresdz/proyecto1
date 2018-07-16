'use strict'

const clienteModel = require('./clientes.model');

module.exports.registrar = function(req,res){
    let nuevoCliente = new clienteModel({
        nombre : req.body.nombre,
        cedula : req.body.cedula,
        telefono : req.body.telefono,
        correo : req.body.correo,
        pais : req.body.pais,
        redes : req.body.redes
    });
    nuevoCliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el cliente, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El cliente se registró con éxito'});
        }``
    });
};

module.exports.listar = function(req,res){
    clienteModel.find().then(
        function(clientes){
            res.send(clientes);
        }
    );
};