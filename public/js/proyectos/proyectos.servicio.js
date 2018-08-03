function registrarProyecto(paInfoProyecto){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarProyecto',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre : paInfoProyecto[0],
            numeroCedula : paInfoProyecto[1],
            telefonos : paInfoProyecto[2],
            email : paInfoProyecto[3],
            empresa : paInfoProyecto[4],
            fechaCreacion : paInfoProyecto[5],
            fechaFin : paInfoProyecto[6],
            ubicacion : paInfoProyecto[7],
            descripcion : paInfoProyecto[8]
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