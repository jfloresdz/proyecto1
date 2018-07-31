'use strict';
const infoModel = require('./estudiante.model');

module.exports.registrar = function(req, res){
    let nuevoDato = new infoModel({
        nombre: req.body.nombre,
        cedula:req.body.cedula,
        telefono:req.body.telefono,
        correo:req.body.correo,
        fechaNc:req.body.fechaNc,
        direccion:req.body.direccion,
        contactoEmer:req.body.contactoEmer,
        telEmer:req.body.telEmer,
        foto:req.body.foto,
        contrasena:req.body.contrasena,
        activado:"0"
    });

    nuevoDato.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'El estudiante no pudo ser registrado: ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'El estudiante ha sido registrado de forma exitosa'
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
                "nombre":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;

        case "2":
        infoModel.find(
            {
                "cedula":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(estudiantes){
                    res.send(estudiantes);
                });
        break;

        case "3":
        infoModel.find(
            {
                "_id": req.body.valor
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