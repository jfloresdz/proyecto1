'use strict'
let lista_bitacora = [];

function registrarBitacora(infoBitacora){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarBitacora',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            EscogerProyecto :infoBitacora[0],
            HorasLaboradas : infoBitacora[1],
            Observaciones : infoBitacora[2],
            TotalHoras : infoBitacora[3]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      console.log(respuesta);
      return respuesta;
};