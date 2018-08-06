'use strict';
const proyectosModel = require('./proyectos.model');

module.exports.registrarProyecto = function (req , resp)
{
    let nuevoProyecto = new proyectosModel
    ({
        nombre:req.body.nombre,
        empresa:req.body.empresa,
        fechaCreacion:req.body.fechaCreacion,
        descripcion:req.body.descripcion,
        equipo :req.body.equipo,
        estado: "Activado"
    });
  
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
    switch(req.body.tipo)
    {
        case "1":
        proyectosModel.find(
            {
                "nombre": {  
                    $regex: new RegExp(req.body.valor, "ig")
                } 
            }
            ).then(
                function(proyectos){
                    res.send(proyectos);
                });
        break;

        case "2":
        proyectosModel.find(
            {
                "numeroCedula":{  
                    $regex: new RegExp(req.body.valor, "ig")
                } 
            }
            ).then(
                function(proyectos){
                    res.send(proyectos);
                });
        break;

        case "3":
        proyectosModel.find(
            {
                "telefonos": req.body.valor
            }
            ).then(
                function(proyectos){
                    res.send(proyectos);
                });
        break;

        case "4":
        proyectosModel.find(
            {
                "email": req.body.valor
            }
            ).then(
                function(proyectos){
                    res.send(proyectos);
                });
        break;
    }
};


