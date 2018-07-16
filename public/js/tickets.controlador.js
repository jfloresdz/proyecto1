'use strict';

imprimirListaTickets();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosTickets);

let inputNombreTicket = document.querySelector('#txtNombreTicket');
let inputNombreProyecto = document.querySelector('#txtNombreProyecto');
let inputNombreEncardado = document.querySelector('#txtNombreEncardado');
let inputTelefono = document.querySelector('#txtTelefono');
let inputDescripcion = document.querySelector('#txtDescripcion');

function obtenerDatosTickets(){
    let infoTickets = [];
    let nNombreTicket = inputNombreTicket.value;
    let nNombreProyecto = inputNombreProyecto.value;
    let nNombreEncardado = inputNombreEncardado.value;
    let nTelefono = inputTelefono.value;
    let nDescripcion = inputDescripcion.value;
    
    infoTickets.push(nNombreTicket,nNombreProyecto,nNombreEncardado,nTelefono,nDescripcion)
    
        registrarTickets(infoTickets);
    
        imprimirListaTickets();
        //limpiarFormulario();
    }


function imprimirListaTickets(){
    let listaTickets = obtenerListaTickets();
    let tbody = document.querySelector('#tblTickets tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaTickets.length; i++){
        let fila = tbody.insertRow();
            let cNombreTicket = fila.insertCell();
            let cNombreProyecto = fila.insertCell();
            let cNombreEncardado = fila.insertCell();
            let cTelefono = fila.insertCell();
            let cDescripcion = fila.insertCell();
        
            
    
            cNombreTicket.innerHTML = listaTickets[i]['nombre'];
            cNombreProyecto.innerHTML = listaTickets[i]['numeroCedula'];
            cNombreEncardado .innerHTML = listaTickets[i]['telefonos'];
            cTelefono.innerHTML = listaTickets[i]['email'];
            cDescripcion.innerHTML = listaTickets[i]['empresa'];
    }

};








    function limpiarFormulario(){
    inputNombreTicket .value = '';    
    inputNombreProyecto .value = '';
    inputNombreEncardado .value ='';
    inputTelefono.value = '';
    inputDescripcion.value = '';
        
    }
