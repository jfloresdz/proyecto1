'use strict';
let autenticarCredenciales = document.querySelector('#btnIngresar');
autenticarCredenciales.addEventListener('click', getUsuarioAutenticado);

function getUsuarioAutenticado() {
    let sUsuarioIngresado = document.querySelector('#txtUser').value;
    let sContrasenna = document.querySelector('#txtPass').value;
    autenticarUsuario(sUsuarioIngresado, sContrasenna);
}

