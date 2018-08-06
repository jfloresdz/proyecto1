'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const fechaNc = document.querySelector('#fechaNc');
const direccion = document.querySelector('#direccion');
const contactoEmer = document.querySelector('#contactoEmer');
const telEmer = document.querySelector('#telEmer');
const foto = document.querySelector('#foto');
const Registrar = document.querySelector('#registrar');

Registrar.addEventListener('click',registrarFormulario);
Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=0){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

function registrarFormulario() {
    let estudiante=[];
    estudiante.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        fechaNc.value,
        direccion.value,
        contactoEmer.value,
        telEmer.value,
        foto.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarEstudiante(estudiante);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
        }else{
            toastr.success(respuesta.msj);
        }
    }

}

function validarFormulario(){
    let respuesta=false;

    if(nombre.value== null || nombre.value==""){
        respuesta=true;
    }

    if (cedula.value == null || cedula.value==""){
        respuesta=true;
    }

    if (telefono.value == null || telefono.value==""){
        respuesta=true;
    }

    if (correo.value == null || correo.value ==""){
        respuesta=true;
    }

    if (fechaNc.value == null || fechaNc.value ==""){
        respuesta=true;
    }

    if (fechaNc.value == null || fechaNc.value ==""){
        respuesta=true;
    }

    if (direccion.value == null || direccion.value ==""){
        respuesta=true;
    }

    if (contactoEmer.value == null || contactoEmer.value ==""){
        respuesta=true;
    }

    if (telEmer.value == null || telEmer.value ==""){
        respuesta=true;
    }

    return respuesta;
}

