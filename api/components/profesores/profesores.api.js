'use strict';
const profesorModel = require('./profesores.model');

//Función para registrar un usuario

module.exports.registrar = function(req, res){
    //Crea una variable nuevoUsuario utilizando como plantilla el userModel
    
    let nuevoProfesor = new profesorModel({
        nombre_completo: req.body.nombre_completo,
        profesion : req.body.profesion,
        universidad: req.body.universidad,
        telefono: req.body.telefono,
        correo: req.body.correo,
        experiencia: req.body.experiencia,
        fechaNacimiento: req.body.fechaNacimiento,
        cursos: req.body.cursos,
        titulos: req.body.titulos,
        foto: req.body.foto,
        provincia: req.body.provincia,
        direccion: req.body.direccion,
        cedula: req.body.cedula,
        contrasenna: req.body.contrasenna
    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el profesor, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El profesor se registró con éxito'});
        }``
    });
};

module.exports.listar = function(req, res){
    profesorModel.find().then(
        function(profesores){
            res.send(profesores);
        });
};