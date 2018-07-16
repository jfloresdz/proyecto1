'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosTickets);

let inputNombreTicket = document.querySelector('#txtNombreTicket');
let inputNombreProyecto = document.querySelector('#txtNombreProyecto');
let inputNombreEncardado = document.querySelector('#txtNombreEncardado');
let inputTelefono = document.querySelector('#txtTelefono');
let inputDescripcion = document.querySelector('#txtDescripcion');

function obtenerDatosTickets(){

    let bError = false;
    let infoTickets = [];
    let nNombreTicket = inputNombreTicket.value;
    let nNombreProyecto = inputNombreProyecto.value;
    let nNombreEncardado = inputNombreEncardado.value;
    let nTelefono = inputTelefono.value;
    let nDescripcion = inputDescripcion.value;
    
    infoTickets.push(nNombreTicket,nNombreProyecto,nNombreEncardado,nTelefono,nDescripcion);

    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el ticket',
            text : 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el ticket');
    }else{
        registrarTickets(infoTickets);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text : 'El ticket se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }
}


function validar(){
    return false;
}

function limpiarFormulario(){
    inputNombreTicket .value = '';    
    inputNombreProyecto .value = '';
    inputNombreEncardado .value ='';
    inputTelefono.value = '';
    inputDescripcion.value = '';  
}
