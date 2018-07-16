'use strict'

const clienteModel = require('./clientes.model');

module.exports.registrar = function(req,res){
    let nuevoCliente = new clientemodel({
        nombre = req.body.titulo,
        cedula = req.body.cedula,
        telefono = req.body.telefono,
        correo = req.body.correo,
        pais = req.body.pais,
        redes = req.body.redes
    });
    nuevoCliente.save(function(error){
        if(error = true){
            res.json({success : false, msj : 'El cliente no pudo ser registrado' + error});
        }else{
            res.json({ success: true, msj: 'El cliente ha sido registrado con exito'});
        }
    });
};
module.exports.listarClientes = function(req,res){
    clienteModel.find().sort({titulo : 'asc'}).then(
        function(clientes){
            res.send(clientes);
        }
    );
};