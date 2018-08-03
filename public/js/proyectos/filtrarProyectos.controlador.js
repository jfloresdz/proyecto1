'use strict';

let inputFilter = document.querySelector('#txtFilter');
let inputTipo = document.querySelector('#txtTipo')

let botonFilter = document.querySelector('#btnFilter');
botonFilter.addEventListener('click', obtenerProy);

function obtenerProy(){
    let listaProyectos = filtrarProyectos(inputTipo.value,inputFilter.value);
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead = thead.insertRow();

    let nombre= filaHead.insertCell();
    let numeroCedula= filaHead.insertCell();
    let telefonos= filaHead.insertCell();
    let email= filaHead.insertCell();
    let empresa= filaHead.insertCell();
    let fechaCreacion= filaHead.insertCell();
    let fechaFin= filaHead.insertCell();
    let ubicacion= filaHead.insertCell();
    let descripcion= filaHead.insertCell();

    nombre.innerHTML = "nombre";
    numeroCedula.innerHTML = "numeroCedula";
    telefonos.innerHTML = "telefonos";
    email.innerHTML = "email";
    empresa.innerHTML = "empresa";
    fechaCreacion.innerHTML = "fechaCreacion";
    fechaFin.innerHTML = "fechaFin";
    ubicacion.innerHTML = "ubicacion";
    descripcion.innerHTML = "descripcion";

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cNumeroCedula = fila.insertCell();
        let cTelefonos = fila.insertCell();
        let cEmail = fila.insertCell();
        let cEmpresa = fila.insertCell();
        let cFechaCreacion = fila.insertCell();
        let cFechaFin = fila.insertCell();
        let cUbicacion = fila.insertCell();
        let cDescripcion = fila.insertCell();
      
        cNombre.innerHTML = listaProyectos[i]['nombre'];
        cNumeroCedula.innerHTML = listaProyectos[i]['numeroCedula'];
        cTelefonos.innerHTML = listaProyectos[i]['telefonos'];
        cEmail.innerHTML = listaProyectos[i]['email'];
        cEmpresa.innerHTML = listaProyectos[i]['empresa'];
        cFechaCreacion.innerHTML = listaProyectos[i]['fechaCreacion'];
        cFechaFin.innerHTML = listaProyectos[i]['fechaFin'];
        cUbicacion.innerHTML = listaProyectos[i]['ubicacion'];
        cDescripcion.innerHTML = listaProyectos[i]['descripcion'];
    }

};