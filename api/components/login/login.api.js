'use strict';
const estudianteModel = require('../estudiante/estudiante.model');
const profesorModel = require('../profesores/profesores.model');
const clienteModel = require('../clientes/clientes.model');
const adminModel = require('../admin/admin.model');

module.exports.login = function(req, res){
    adminModel.find({
        "correo": req.body.correo,
        "contrasena": req.body.contrasena
    }).then(
        function (admin) {
            if(admin.length>0){
                res.send({
                    "_id":admin[0]._id,
                    "foto":admin[0].foto,
                    "nombre":admin[0].nombre,
                    "tipo":"0",
                    "estado":"0"
                })
            }else{
                estudianteModel.find(
                    {   
                        "correo": req.body.correo,
                        "contrasena": req.body.contrasena
                    }
                    ).then(
                        function(estudiantes){
                            if(estudiantes.length>0){
                                res.send({
                                    "_id":estudiantes[0]._id,
                                    "foto":estudiantes[0].foto,
                                    "nombre":estudiantes[0].nombre,
                                    "tipo":"1",
                                    "estado":estudiantes[0].activado
                                })
                            }
                            else{
                                profesorModel.find(
                                {
                                    "correo": req.body.correo,
                                    "contrasena": req.body.contrasena
                                }
                                ).then(
                                    function (profesores) {
                                        if(profesores.length>0){
                                            res.send({
                                                "_id":profesores[0]._id,
                                                "foto":profesores[0].foto,
                                                "nombre":profesores[0].nombre,
                                                "tipo":"2",
                                                "estado":profesores[0].activado
                                            })
                                        }
                                        else{
                                            clienteModel.find(
                                                {
                                                    "correo": req.body.correo,
                                                    "contrasena": req.body.contrasena
                                                }
                                            ).then(
                                                function (clientes) {
                                                   if(clientes.length>0){ 
                                                       res.send({
                                                        "_id":clientes[0]._id,
                                                        "foto":clientes[0].foto,
                                                        "nombre":clientes[0].nombre,
                                                        "tipo":"3",
                                                        "estado":clientes[0].activado
                                                    })
                                                        }else{
                                                            res.send([])
                                                        }
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                    })
            }
        }
    )
};