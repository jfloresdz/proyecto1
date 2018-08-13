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

function filtrarProfesor(cTipo,cValor){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarProfesores',
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
    
    return listaProfesores;
}

function filtrarProyectos(cTipo,cValor){
    let listaProyectos = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarProyectos',
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
    
    return listaProyectos;
  }

  function filtrarClientes(cTipo,cValor){
    let listaClientes = [];
  
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarClientes',
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

  function crearMensaje(id_proyect,proyecto){
    let respuesta = '';
    let informacion = {
        _id:id_proyect,
        id_user:proyecto[0],
        mensaje:proyecto[1]
    }

    let peticion = $.ajax({
        url : 'http://localhost:4000/api/crearMensaje',
        type : 'post',
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        async : false,
        data:JSON.stringify(informacion)
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
    let listaEstudiantes = [];

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
    let listaEstudiantes = [];
  
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
    
    return listaEstudiantes;
  }

  function anadirTicket(id_proyect,proyecto){
    let respuesta = '';
    let informacion = {
        _id:id_proyect,
        titulo:proyecto[0],
        descripcion:proyecto[1]    
    }

    let peticion = $.ajax({
        url : 'http://localhost:4000/api/anadirTicket',
        type : 'post',
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        async : false,
        data:JSON.stringify(informacion)
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    

      peticion.fail(function(response){
       
      });

      console.log(respuesta);
      return respuesta;
}