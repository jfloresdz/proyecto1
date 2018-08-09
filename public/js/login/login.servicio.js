'use strict'

function loginServicio(InputCorreo,InputContrasena){
    let respuesta = [];
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/login',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{          
              correo : InputCorreo,
              contrasena : InputContrasena
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      console.log(respuesta);
      return respuesta;
}

