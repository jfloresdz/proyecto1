'use strict'

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosCliente);


let inputNombreCliente = document.querySelector('#txtNom');
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
}