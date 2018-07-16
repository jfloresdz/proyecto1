'use strict';

let inputFilter = document.querySelector('#txtFilter');
let inputTipo = document.querySelector('#txtTipo')

let botonFilter = document.querySelector('#btnFilter');
botonFilter.addEventListener('click', obtenerCli);

function obtenerCli(){
    let listaClientes = filtrarClientes(inputTipo.value,inputFilter.value);
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';
    let filaHead = thead.insertRow();

    let nombre = filaHead.insertCell();
    let cedula = filaHead.insertCell();
    let telefono = filaHead.insertCell();
    let correo = filaHead.insertCell();
    let pais = filaHead.insertCell();
    let redes = filaHead.insertCell();

    nombre.innerHTML = "nombre"; 
    cedula.innerHTML = "cedula"; 
    telefono.innerHTML = "telefono"; 
    correo.innerHTML = "correo"; 
    pais.innerHTML = "pais"; 


    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();
       
        let cnombre = fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let cpais= fila.insertCell();

        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        cpais.innerHTML = listaClientes[i]['pais']; 
    }

};