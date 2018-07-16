/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/
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



function imprimir_lista_datos(){
    let listaPersonas = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_usuarios',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaPersonas;
}