'use strict';
function registrarEstudiante(estudiante){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEstudiante',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre: estudiante[0],
            cedula: estudiante[1],
            telefono: estudiante[2],
            correo: estudiante[3],
            fechaNc: estudiante[4],
            direccion: estudiante[5],
            contactoEmer: estudiante[6],
            telEmer: estudiante[7],
            foto: estudiante[8],
            contrasena: Math.random().toString(36).substring(7)
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


function obtenerListaEstudiantes(){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarEstudiantes',
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
    
    return listaEstudiantes;
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