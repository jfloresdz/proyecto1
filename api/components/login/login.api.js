'use strict';
const estudianteModel = require('../estudiante/estudiante.model');
const profesorModel = require('../profesores/profesores.model');
const clienteModel = require('../clientes/clientes.model');

module.exports.login = function(req, res){
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
                        "tipo":"1"
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
                                    "tipo":"2"
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
                                        res.send({
                                            "_id":clientes[0]._id,
                                            "foto":clientes[0].foto,
                                            "nombre":clientes[0].nombre,
                                            "tipo":"3"
                                        })
                                    }
                                )
                            }
                        }
                    )
                }
        });
};