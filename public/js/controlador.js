'use strict'
imprimir_lista_datos();
let botonGuardar = document.querySelector('#btnGuardar');

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCedula');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');
let inputFechaN = document.querySelector('#txtFechaNc');
let inputEstadoCivil = document.querySelector('#sltEstado');
let inputLugarResidencia = document.querySelector('#txtDir');
let inputcontactoEmer = document.querySelector('#txtCont');
let inputTelEmer = document.querySelector('#txtTel2');

botonGuardar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let infoEstudiante = [];

    let sNombre = inputNombre.value;
    let sCedula = inputCedula.value;
    let nTelefono = inputTelefono.value;
    let sCorreo = inputCorreo.value;
    let sFecha = inputFechaN.value;
    let sEstadoCivil =inputEstadoCivil.value;
    let sNacionalidad = inputNacionalidad.value;
    let sLugarResidencia = inputLugarResidencia.value;
    let scontactoEmer = inputcontactoEmer.value;
    let sTelEmer = inputTelEmer.value;

    infoEstudiante.push(sNombre,sCedula,nTelefono,sCorreo,sFecha,
        sEstadoCivil, sNacionalidad, sLugarResidencia, scontactoEmer,
        sTelEmer);

    imprimir_lista_datos();
};

function imprimir_lista_datos(){
    let tbody = document.querySelector('#tblInfoEst tbody');
    let lista_datosEst = obtener_lista_datosEst();

    tbody.innerHTML = '';

    for(let i=0; i<lista_datosEst.length; i++){
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        let celdaFechaN = fila.insertCell();
        let celdaEstadoCivil = fila.insertCell();
        let celdaNacionalidad = fila.insertCell();
        let celdadLugarR = fila.insertCell();
        let celdadcontactoEmer = fila.insertCell();
        let celdaTelEmer = fila.insertCell();

        celdaNombre = lista_datosEst[i][0];
        celdaCedula = lista_datosEst[i][1];
        celdaTelefono = lista_datosEst[i][2];
        celdaCorreo = lista_datosEst[i][3];
        celdaFechaN = lista_datosEst[i][4];
        celdaEstadoCivil = lista_datosEst[i][5];
        celdaNacionalidad = lista_datosEst[i][6];
        celdadLugarR = lista_datosEst[i][7];
        celdadcontactoEmer = lista_datosEst[i][8];
        celdaTelEmer = lista_datosEst[i][9];
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
        if(inputCorreo.value == ''){
            inputCorreo.classList.add('error_input');
            bError = true;
        }else{
            inputCorreo.classList.remove('error_input');
        }
        //Validación del teléfono
        if(inputTelefono.value == ''){
            inputTelefono.classList.add('error_input');
            bError = true;
        }else{
            inputTelefono.classList.remove('error_input');
        }
        return bError;
    };

};

function limpiarFormulario(){
    inputNombre.value = '';  
    inputEmail.value = '';
    inputTelefono.value ='';
    inputCorreo.value = '';
    inputFechaN.value = '';
    inputEstadoCivil.value = '';
    inputLugarResidencia.value = '';
    inputcontactoEmer.value = '';
    inputTelEmer.value = '';
}
