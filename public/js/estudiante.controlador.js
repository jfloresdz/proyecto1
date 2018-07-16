'use strict'
//imprimir_lista_datos();
let botonGuardar = document.querySelector('#btnGuardar');

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCed');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtEmail');
let inputFechaN = document.querySelector('#txtFecha');
let inputEstadoCivil = document.querySelector('#sltEstado');
let inputNacionalidad = document.querySelector('#slctPais');
let inputLugarResidencia = document.querySelector('#txtDir');
let inputcontactoEmer = document.querySelector('#txtCont');
let inputTelEmer = document.querySelector('#txtTel2');

botonGuardar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let infoEstudiante = [];
    let bError = false;

    infoEstudiante.push(
        inputNombre.value,
        inputCedula.value,
        inputTelefono.value,
        inputCorreo.value,
        inputFechaN.value,
        inputEstadoCivil.value, 
        inputNacionalidad.value, 
        inputLugarResidencia.value,
        inputcontactoEmer.value,
        inputTelEmer.value);

        bError = validar();
        if(bError == true){
            swal({
                type : 'warning',
                title : 'No se pudo registrar el profesor',
                text: 'Por favor revise los campos en rojo',
                confirmButtonText : 'Entendido'
            });
        }else{
            registrarEstudiante(infoEstudiante);
            swal({
                type : 'success',
                title : 'Registro exitoso',
                text: 'El usuario se registró adecuadamente',
                confirmButtonText : 'Entendido'
            });

            limpiarFormulario();
        }
};

function validar(){
    return false;
}

function limpiarFormulario(){
    inputNombre.value=null;
    inputCedula.value=null;
    inputTelefono.value=null;
    inputCorreo.value=null;
    inputFechaN.value=null;
    inputEstadoCivil.value=null; 
    inputNacionalidad.value=null; 
    inputLugarResidencia.value=null;
    inputcontactoEmer.value=null;
    inputTelEmer.value=null;
}
