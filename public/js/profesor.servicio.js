'use strict';

function registrarProfesor(paInfoProfesores){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProfesor',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre_completo: paInfoProfesores[0],
            profesion: paInfoProfesores[1],
            telefono: paInfoProfesores[3],
            correo: paInfoProfesores[2],
            experiencia: paInfoProfesores[4],
            cursos: paInfoProfesores[6],
            cedula: paInfoProfesores[7],
            contrasenna: paInfoProfesores[5],
            universidad: paInfoProfesores[8],
            fechaNacimiento: paInfoProfesores[9],
            provincia: paInfoProfesores[10],
            direccion: paInfoProfesores[11]
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


function obtenerListaProfesores(){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_profesores',
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
    
    return listaProfesores;
}