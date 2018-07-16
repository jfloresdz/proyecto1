'use strict';
function registrarClientes(paInfoClientes){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_Clientes',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
     nombre : paInfoClientes[0],
     cedula : paInfoClientes[1],
     telefono : paInfoClientes[2],
     correo : paInfoClientes[3],
     Pais : paInfoClientes[4],
     Redes : paInfoClientes[5],
  

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function obtenerListaClientes(){
  let listaClientes = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/listar_Clientes',
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
  
  return listaClientes;
}