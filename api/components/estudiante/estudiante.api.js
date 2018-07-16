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

module.exports.listar = function(req, res){
    infoModel.find().then(
        function(estudiantes){
            res.send(estudiantes);
        });
};

module.exports.filtrar = function(req, res){
    switch(req.body.tipo)
    {
        case "1":
        infoModel.find(
            {
                "nombre": req.body.valor
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;

        case "2":
        infoModel.find(
            {
                "cedula": req.body.valor
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;

        case "3":
        infoModel.find(
            {
                "telefono": req.body.valor
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;

        case "4":
        infoModel.find(
            {
                "correo": req.body.valor
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;
    }
};