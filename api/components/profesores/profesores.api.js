'use strict';
const profesorModel = require('./profesores.model');

//Función para registrar un usuario

module.exports.registrar = function(req, res){
    //Crea una variable nuevoUsuario utilizando como plantilla el userModel
    
    let nuevoProfesor = new profesorModel({
        nombre:req.body.nombre,
        profesion:req.body.profesion,
        telefono:req.body.telefono,
        correo:req.body.correo,
        experiencia:req.body.experiencia,
        fechaNacimiento:req.body.fechaNacimiento,
        foto:req.body.foto,
        direccion:req.body.direccion,
        cedula:req.body.cedula,
        contrasena:req.body.contrasena,
        activado:"0"
    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msj : 'No se pudo registrar el profesor, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msj : 'El profesor se registró con éxito'});
        }``
    });
};

module.exports.listar = function(req, res){
    profesorModel.find().then(
        function(profesores){
            res.send(profesores);
        });
};



module.exports.filtrar = function(req, res){
    switch(req.body.tipo)
    {
        case "1":
        profesorModel.find(
            {
                "nombre":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(profesores){
                    res.send(profesores);
                });
        break;

        case "2":
        profesorModel.find(
            {
                "cedula":   {  
                                $regex: new RegExp(req.body.valor, "ig")
                            } 
            }
            ).then(
                function(profesores){
                    res.send(profesores);
                });
        break;

        case "3":
        profesorModel.find(
            {
                "telefono": req.body.valor
            }
            ).then(
                function(profesores){
                    res.send(profesores);
                });
        break;

        case "4":
        profesorModel.find(
            {
                "correo": req.body.valor
            }
            ).then(
                function(profesores){
                    res.send(profesores);
                });
        break;
    }
};