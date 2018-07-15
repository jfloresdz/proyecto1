'use strict';
const infoModel = require('./estudiante.model');

module.exports.registrar = function(req, res){
    let nuevoDato = new infoModel({
        nombre : req.body.nombre,
        cedula : req.body.cedula,
        telefono : req.body.telefono,
        correo : req.body.correo,
        fechaNc : req.body.fechaNc,
        estadoCivil : req.body.estadoCivil,
        nacionalidad : req.body.nacionalidad,
        lugarResidencia : req.body.lugarResidencia,
        contactoEmer: req.body.contactoEmer,
        TelEmer: req.body.TelEmer
    });

    nuevoDato.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'El dato no pudo ser registrado: ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'El dato ha sido registrado de forma exitosa'
            });
            
        }

    });
};