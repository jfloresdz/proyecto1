'use strict';

imprimirListaProfesores();

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);


let inputNombre = document.querySelector('#txtNombre');
let inputProfesion = document.querySelector('#txtProf')
let inputEmail = document.querySelector('#txtEmail');
let inputTelefono = document.querySelector('#txtTelefono');
let inputExp = document.querySelector('#txtExp');
let inputContrasenna = document.querySelector('#txtContrasenna');
let inputConfirmacion = document.querySelector('#txtConfirmacion');
let inputCurso = document.querySelector('#txtCurso');
let inputCed = document.querySelector('#txtCed');

function obtenerDatos(){
    let infoProfesor =[];
    let bError = false;


    infoProfesor.push(inputNombre.value,
        inputProfesion.value,
        inputEmail.value,
        inputTelefono.value,
        inputExp.value,
        inputContrasenna.value,
        inputCurso.value,
        inputCed.value);
    
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
        imprimirListaProfesores();
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

    if(inputContrasenna.value == ''){
        inputContrasenna.classList.add('error_input');
        bError = true;
    }else{
        inputContrasenna.classList.remove('error_input');
    }

    if(inputContrasenna.value != inputConfirmacion.value){
        inputContrasenna.classList.add('error_input');
        inputConfirmacion.classList.add('error_input');
        bError = true;
    }else{
        inputContrasenna.classList.remove('error_input');
        inputConfirmacion.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputNombre.value=null;
    inputProfesion.value=null;
    inputEmail.value=null;
    inputTelefono.value=null;
    inputExp.value=null;
    inputContrasenna.value=null;
    inputCurso.value=null;
    inputCed.value=null;
}