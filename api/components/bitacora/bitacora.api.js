'use strict'
//Se define todas las aaciones que se van a realizar dentro de la BD con el Model

const bitacoraModel = require('./bitacora.model');

module.exports.registrar = function(req, res){
    //todo codigo para registrar nuevo dato de bitacora
    let nuevaBitacora = new bitacoraModel({
        EscogerProyecto : req.body.EscogerProyecto,
        HorasLaboradas : req.body.HorasLaboradas,
        Observaciones : req.body.Observaciones,
        TotalHoras : req.body.TotalHoras
    })

    nuevaBitacora.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'Los datos no pudieron ser registrados: ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'Los datos han sido registrados correctamente'
            });
        }
    });
};

module.exports.listar = function(req, res){
    bitacoraModel.find().then(
        function(bitacoras){
            res.send(bitacoras);
        }

    );
};