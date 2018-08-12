'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

//imprimir_lista_datos();
let botonGuardar = document.querySelector('#btnGuardar');

let currentFoto = document.querySelector('#currentFoto');

let userName = document.querySelector('#userName');

Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=1){
        window.location.assign(baseUrl+'/public/logIn.html');
    }else{
        userName.textContent=sessionStorage.getItem("nombre");
        currentFoto.src = sessionStorage.getItem("foto");
        buscarEstudiante();
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

function buscarEstudiante(){
    let estudiante = filtrarEstudiantes("3",sessionStorage.getItem('id'));

            document.querySelector('#telefono').textContent="Telefono: "+estudiante[0]['telefono'];
            document.querySelector('#correo').textContent="Correo: "+estudiante[0]['correo'];
            document.querySelector('#cedula').textContent="Cedula: "+estudiante[0]['cedula'];
            document.querySelector('#contactoEmer').textContent="Contacto Emergencia: "+estudiante[0]['contactoEmer'];
            document.querySelector('#telEmer').textContent="Telefono Emergencia: "+estudiante[0]['telEmer'];
            document.querySelector('#fechaNc').textContent="Fecha Nacimiento: "+estudiante[0]['fechaNc'];

};