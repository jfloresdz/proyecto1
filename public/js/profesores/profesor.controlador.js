'use strict';

//imprimirListaProfesores();

const botonRegistrar = document.querySelector('#btnRegistrar');
const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');
//botonRegistrar.addEventListener('click', obtenerDatos);

let currentFoto = document.querySelector('#currentFoto');

let userName = document.querySelector('#userName');

Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=2){
        window.location.assign(baseUrl+'/public/logIn.html');
    }else{
        userName.textContent=sessionStorage.getItem("nombre");
        currentFoto.src = sessionStorage.getItem("foto");
        buscarProfesor();
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

function buscarProfesor(){
    let estudiante = filtrarProfesor("3",sessionStorage.getItem('id'));

            document.querySelector('#telefono').textContent="Telefono: "+estudiante[0]['telefono'];
            document.querySelector('#correo').textContent="Correo: "+estudiante[0]['correo'];
            document.querySelector('#cedula').textContent="Cedula: "+estudiante[0]['cedula'];
            document.querySelector('#fechaNc').textContent="Fecha Nacimiento: "+estudiante[0]['fechaNacimiento'];

};