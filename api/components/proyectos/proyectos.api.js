'use strict';
const proyectosModel = require('./proyectos.model');
const nodeMailer = require('nodemailer');

//Poner en si https://myaccount.google.com/lesssecureapps
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'clicktec.cenfo@gmail.com',
        pass: 'clicktec1234.'
    }
});


module.exports.registrarProyecto = function (req , resp)
{
    let fechaHoy =new Date();
    let nuevoProyecto = new proyectosModel
    ({
        nombre:req.body.nombre,
        empresa:req.body.empresa,
        empresa_nombre:req.body.empresa_nombre,
        fechaCreacion:fechaHoy.toLocaleString(),
        descripcion:req.body.descripcion,
        equipo: req.body.equipo,
        estado: "Activado"
    });
  
   nuevoProyecto.save(function(error)
   {
    if(error) {
    resp.json
        ({ success : false, msj : 'El proyecto no pudo ser registrado : ' + error})     
    }else{
            /*
            let mailOptions = {
                from: 'proyecto.test.software@gmail.com',
                to: nuevoCliente.correo,
                subject: 'Bievenido a Cenfo App',
                html:
                `
                <html>
                <body bgcolor="#2D2D2D" style="font-family: Arial; background-color: #2D2D2D;">
            
                <table width="630" class="container" align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                    <table align="left">
                        <tr>
                        <td width="188" class="Logo">
                            <img src="http://res.cloudinary.com/jfloresd/image/upload/v1533657882/Logo_b3oddw.png">
                        </td>
                        </tr>
                    </table>
                    <table align="right">
                        <tr>
                        <td height="70" class="viewWebsite">
                            <p style="font-family: Arial, Helvetica, sans-serif; color: #ffffff; font-size: 14px;">Cenfotec Software House</p>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            
                <table width="630" bgcolor="#fcfcfc" style="border: 1px solid #dddddd; line-height: 135%;" class="container" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                    <td bgcolor="#fcfcfc" colspan="3" width="100%" height="10">&nbsp;</td>
                    </tr>
                    <tr>
                    <td bgcolor="#fcfcfc" colspan="3" align="center">
                        <img src="${nuevoCliente.foto}" width="125px" height="125px" style="border-radius: 50%;">
                    </td>
                    </tr>
                    <tr>
                    <td colspan="3" height="15">&nbsp;</td>
                    </tr>
                    <tr>
                    <td bgcolor="#fcfcfc" colspan="3">
                        <table>
                        <tr>
                            <td width="30" class="spacer">&nbsp;</td>
                            <td align="center" class="bodyCopy">
                            <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; color: #404040; margin-top: 0; margin-bottom: 20px; padding: 0; line-height: 135%" class="headline">Bienvenido ${nuevoCliente.nombre}</h1>
                            <p style="font-family: Arial, Helvetica, sans-serif; color: #555555; font-size: 14px; padding: 0 40px;">
                            Has sido seleccionado/a para formar parte del Cenfotec Software House, para ingresar en el sistema utiliza:
                            </p>
                            <p>
                            correo: <b>${nuevoCliente.correo}</b> / contrasena: <b>${nuevoCliente.contrasena}</b>.
                            </p>
                            </td>
                            <td width="30" class="spacer">&nbsp;</td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td colspan="3" align="center">
                        <br>
                        <img src="https://miprimodani.es/mpd/wp-content/uploads/2017/04/test-banner-klein.png" width="80%" height="150px">
                    </td>
                    </tr>
                    <tr>
                    <td colspan="3" height="3">&nbsp;</td>
                    </tr>
                </table>
                <br>
                <br>
                </body>
            </html>               
                `
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            */

            resp.json
                ({ success : true, msj : 'El proyecto se registro exitosamente'});
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
                "_id": req.body.valor
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

        case "5":
        proyectosModel.find(
            {
                "equipo.id_user":req.body.valor

            }).then(
                function(proyectos){
                    res.send(proyectos);
                });
        break;
    }
};

module.exports.actualizar = function (req, res) {
    proyectosModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msj: 'No se ha actualizado: ' + handleError(err) });

            } else {
                res.json({ success: true, msj: 'Se ha actualizado correctamente.' });
            }
        });
};

module.exports.crearMensaje=function(req,res){
    proyectosModel.findByIdAndUpdate(req.body._id, { $push:{chat:{id_user:req.body.id_user, mensaje:req.body.mensaje}}},
        function (err, user) {
            if (err) {
                res.json({ success: false, msj: 'No se ha actualizado: ' + handleError(err) });

            } else {
                res.json({ success: true, msj: 'Se ha actualizado correctamente.' });
            }
        });
}

module.exports.anadirEstudiante=function(req,res){
    proyectosModel.findByIdAndUpdate(req.body._id, { $push:{equipo:{
        id_user:req.body.id_user,
        rol:"3",
        estado:"0"
        }}},
        function (err, user) {
            if (err) {
                res.json({ success: false, msj: 'No se ha actualizado: ' + handleError(err) });

            } else {
                res.json({ success: true, msj: 'Se ha actualizado correctamente.' });
            }
        });
}