'use strict';
const infoModel = require('./estudiante.model');
const nodeMailer = require('nodemailer');

//Poner en si https://myaccount.google.com/lesssecureapps
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'clicktec.cenfo@gmail.com',
        pass: 'clicktec1234.'
    }
});

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

            let mailOptions = {
                from: 'proyecto.test.software@gmail.com',
                to: nuevoDato.correo,
                subject: 'Bievenido a Cenfo App',
                html: `
                <html>
                <body bgcolor="#f6f6f6" style="font-family: Arial; background-color: #f6f6f6;">

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
                        <img src="${nuevoDato.foto}" width="125px" height="125px" style="border-radius: 50%;">
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
                                    <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; color: #404040; margin-top: 0; margin-bottom: 20px; padding: 0; line-height: 135%" class="headline">Bienvenido ${nuevoDato.nombre}</h1>
                                    <p style="font-family: Arial, Helvetica, sans-serif; color: #555555; font-size: 14px; padding: 0 40px;">
                                    Has sido seleccionado para formar parte del Cenfotec Software House, para ingresar en el sistema utiliza el correo: ${nuevoDato.correo} y la contrasena: ${nuevoDato.contrasena}.
                                    </p>
                                </td>
                                <td width="30" class="spacer">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" align="center">
                        <img src="http://www.rickygipson.com/images/codepen/grey_div.jpg" width="95%">
                    </td>
                </tr>
                <tr>
                    <td colspan="3" height="3">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" class="force-width">
                        <table width="213" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="belowConsoles">
                            <tr>
                                <td width="35" class="spacer"></td>
                                <td>
                                    <div class="consoleImage">
                                    <img src="http://www.rickygipson.com/images/codepen//thumbnails.jpg" class="belowFeatureIMG">
                                    </div>
                                    <h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #404040; margin: 0; padding: 0;">This is a story</h3>
                                    <p style="font-family: Arial, Helvetica, sans-serif; color: #555555; font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper aliquet venenatis. Quisque eu nunc vitae elit eleifend accumsan.</p>
                                </td>
                            </tr>
                        </table>
                        <table width="193" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="belowConsoles">
                            <tr>
                                <td width="15" class="spacer"></td>
                                <td>
                                    <div class="consoleImage">
                                    <img src="http://www.rickygipson.com/images/codepen/thumbnails.jpg" class="belowFeatureIMG">
                                    </div>
                                    <h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #404040; margin: 0; padding: 0;">This is a story</h3>
                                    <p style="font-family: Arial, Helvetica, sans-serif; color: #555555; font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper aliquet venenatis. Quisque eu nunc vitae elit eleifend accumsan.</p>
                                </td>
                            </tr>
                        </table>
                        <table width="193" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="belowConsoles">
                            <tr>
                                <td width="15" class="spacer"></td>
                                <td>
                                    <div class="consoleImage">
                                    <img src="http://www.rickygipson.com/images/codepen/thumbnails.jpg" class="belowFeatureIMG">
                                    </div>
                                    <h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #404040; margin: 0; padding: 0;">This is a story</h3>
                                    <p style="font-family: Arial, Helvetica, sans-serif; color: #555555; font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper aliquet venenatis. Quisque eu nunc vitae elit eleifend accumsan.</p>
                                </td>
                            </tr>
                        </table>
		</td>
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

module.exports.actualizar = function (req, res) {
    userModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msj: 'No se ha actualizado.' + handleError(err) });

            } else {
                res.json({ success: true, msj: 'Se ha actualizado correctamente.' + res });
            }
        });
};