'use strict';
function registrarTickets(paInfoTickets){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_Tickets',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
        nombreTicketc : paInfoTickets[0],
        nombreProyecto : paInfoTickets[1],
        nombreEncargado : paInfoTickets[2],
        telefono :paInfoTickets[3]
    
    
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function obtenerListaTickets(){
  let listaTickets = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/listar_Tickets',
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
  
  return listaTickets;
}