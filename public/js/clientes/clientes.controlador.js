'use strict'
const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');
const botonRegistrar = document.querySelector('#btnRegistrar');
Salir.addEventListener('click',cerrarSesion);

//botonRegistrar.addEventListener ('click' , obtenerDatosCliente);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=3){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}


/*let inputNombreCliente = document.querySelector('#txtNom');
let inputNumCedulaCliente = document.querySelector('#txtCed');
let inputTelefonoCliente = document.querySelector('#txtTel');
let inputEmailCliente = document.querySelector('#txtCorreo');
let inputPais = document.querySelector('#slctPais');

function obtenerDatosCliente(){
    let infoCliente = [];
    let bError = false;
    
    infoCliente.push( inputNombreCliente.value,   
        inputNumCedulaCliente.value,
        inputTelefonoCliente.value,
        inputEmailCliente.value,
        inputPais.value);
    
        bError = validar();
        if(bError == true){
            swal({
                type : 'warning',
                title : 'No se pudo registrar el cliente',
                text: 'Por favor revise los campos en rojo',
                confirmButtonText : 'Entendido'
            });
        }else{
            registrarCliente(infoCliente);
            swal({
                type : 'success',
                title : 'Registro exitoso',
                text: 'El Cliente se registró adecuadamente',
                confirmButtonText : 'Entendido'
            });
        }
}

function validar(){
    return false;
}


function limpiarFormulario(){
    inputNombreCliente.value = null    
    inputNumCedulaCliente.value = null
    inputTelefonoCliente.value =null
    inputEmailCliente.value = null
    inputPais.value = null
}*/

