'use strict';

//imprimirListaProfesores();

const botonRegistrar = document.querySelector('#btnRegistrar');
const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');
//botonRegistrar.addEventListener('click', obtenerDatos);


const inputNombre = document.querySelector('#txtNombre');
const inputProfesion = document.querySelector('#txtProf');
const inputEmail = document.querySelector('#txtEmail');
const inputTelefono = document.querySelector('#txtTelefono');
const inputExp = document.querySelector('#txtExp');
const inputConfirmacion = document.querySelector('#txtConfirmacion');
const inputCurso = document.querySelector('#txtCurso');
const inputCed = document.querySelector('#txtCed');
const inputFecha = document.querySelector('#txtFecha');
const inputProv = document.querySelector('#slctProv');
const inputDir = document.querySelector('#txtDir');
const inputDoc = document.querySelector('#txtUniv');

Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=2){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

/*function obtenerDatos(){
    let infoProfesor =[];
    let bError = false;

    let contrasenna= Math.random().toString(36).substring(7);
    infoProfesor.push(
        inputNombre.value,
        inputProfesion.value,
        inputEmail.value,
        inputTelefono.value,
        inputExp.value,
        contrasenna,
        inputCurso.value,
        inputCed.value,
        inputFecha.value,
        inputProv.value,
        inputDir.value,
        inputDoc.value    
    );
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el profesor',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el profesor');
    }else{
        registrarProfesor(infoProfesor);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        //imprimirListaProfesores();
        limpiarFormulario();
    }
    
};

function imprimirListaProfesores(){
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#tblPersonas tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cEmail = fila.insertCell();
        let cTelefono = fila.insertCell();
        cNombre.innerHTML = listaProfesores[i]['nombre_completo'];
        cEmail.innerHTML = listaProfesores[i]['correo'];
        cTelefono.innerHTML = listaProfesores[i]['telefono'];
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
    if(inputTelefono.value == ''){
        inputTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error_input');
    }
    //Validación de la edad

    //Validación de la contraseña
    return bError;
};

function limpiarFormulario(){
    inputNombre.value=null,
    inputProfesion.value =null,
    inputEmail.value =null,
    inputTelefono.value =null,
    inputExp.value=null,
    inputCurso.value=null,
    inputCed.value=null,
    inputFecha.value=null,
    inputProv.value=null,
    inputDir.value=null,
    inputDoc.value=null    
}*/