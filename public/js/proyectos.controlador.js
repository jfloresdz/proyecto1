'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);


let inputNombre = document.querySelector('#txtNombre');
let inputNumeroCedula = document.querySelector('#txtCed');
let inputTelefonos = document.querySelector('#txtTelefono');
let inputEmail = document.querySelector('#txtEmail');
let inputEmpresa = document.querySelector('#txtEmpresa');
let inputFechaCreacion = document.querySelector('#txtFechaCreacion');
let inputFechaFin = document.querySelector('#txtFechaFin');
let inputUbicacion = document.querySelector('#txtUbicacion');
let inputDescripcion = document.querySelector('#txtDescripcion');


function obtenerDatos(){
    let infoProyecto =[];
    let bError = false;

    infoProyecto.push(
        inputNombre.value,
        inputNumeroCedula.value,
        inputTelefonos.value,
        inputEmail.value,
        inputEmpresa.value,
        inputFechaCreacion.value,
        inputFechaFin.value,
        inputUbicacion.value,
        inputDescripcion.value
    );
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el proyecto',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el proyecto');
    }else{
        registrarProyecto(infoProyecto);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El proyecto se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });

        limpiarFormulario();
    }
    
};



function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre completo
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error_input');
        bError = true;
    }else{
        inputNombre.classList.remove('error_input');
    }
    //Validación del correo
    if(inputEmail.value == ''){
        inputEmail.classList.add('error_input');
        bError = true;
    }else{
        inputEmail.classList.remove('error_input');
    }
    //Validación del teléfono
    if(inputTelefonos.value == ''){
        inputTelefonos.classList.add('error_input');
        bError = true;
    }else{
        inputTelefonos.classList.remove('error_input');
    }
    //Validación de la edad

    //Validación de la contraseña
    return bError;
};

function limpiarFormulario(){
    inputNombre.value=null;
    inputNumeroCedula.value=null;
    inputTelefonos.value=null;
    inputEmail.value=null;
    inputEmpresa.value=null;
    inputFechaCreacion.value=null;
    inputFechaFin.value=null;
    inputUbicacion.value=null;
    inputDescripcion.value=null;   
}