'use strict';
function registrarEstudiante(paInfoPersona){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEstudiante',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre : paInfoPersona[0],
            cedula : paInfoPersona[1],
            telefono : paInfoPersona[2],
            correo : paInfoPersona[3],
            fechaNc : paInfoPersona[4],
            estadoCivil: paInfoPersona[5],
            nacionalidad : paInfoPersona[6],
            lugarResidencia : paInfoPersona[7],
            contactoEmer : paInfoPersona[8],
            TelEmer : paInfoPersona[9]

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

function filtrarEstudiantes(cTipo,cValor){
    let listaClientes = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarEstudiantes',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            tipo: cTipo,
            valor: cValor
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });
  
      return respuesta;
    
    return listaClientes;
  }