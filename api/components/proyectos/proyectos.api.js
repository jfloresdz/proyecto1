'use strict';
const proyectosModel = require('./proyectos.model');

module.exports.registrarProyecto = function (req , resp)
{
    let nuevoProyecto = new proyectosModel
    ({
        nombre : req.body.nombre,
        numeroCedula : req.body.numeroCedula,
        telefonos : req.body.telefonos,
        email : req.body.email,
        empresa : req.body.empresa,
        fechaCreacion : req.body.fechaCreacion,
        fechaFin : req.body.fechaFin,
        ubicacion : req.body.ubicacion,
        descripcion :  req.body.descripcion,       
    })
  
   nuevoProyecto.save(function(error)
   {
    if(error) {
    resp.json
        ({ succes : false, msj : 'El proyecto no pudo ser registrado : ' + error})     
    }else{
    resp.json
        ({ succes : true, msj : 'El proyecto se registro exitosamente : ' +error}) 
        }    
   });
};

module.exports.listar = function(req, res){
    proyectosModel.find().then(
        function(proyectos){
            res.send(proyectos);
        });
};

module.exports.filtrar = function(req, res){
    proyectosModel.find({"nombre_completo": "test"}).then(
        function(proyectos){
            res.send(proyectos);
        });
};


