'use strict'
imprimir_lista();
let botonGuardar = document.querySelector('#btnGuardar');

botonGuardar.addEventListener('click', obtenerDatos);

let inputEscogerProyecto = document.querySelector('#mostrarProyectos');
let inputHorasLaboradas = document.querySelector('#txtHorasLaboradas');
let inputObservaciones = document.querySelector('#txtObservaciones');
let inputTotalHoras = document.querySelector('#txtTotal');

function obtenerDatos(){
    let infoBitacora = [];

    let sEscogerProyecto = inputEscogerProyecto.value;
    let nHorasLaboradas = inputHorasLaboradas.value;
    let sObservaciones = inputObservaciones.value;
    let nTotalHoras = Number(inputTotalHoras.value);

    registrar_bitacora(sEscogerProyecto, nHorasLaboradas, sObservaciones, nTotalHoras);
    imprimir_lista();
};

function imprimir_lista(){

    let tbody = document.querySelector('#tblBitacora tbody');

    let lista_bitacora = obtener_lista_bitacora();

    tbody.innerHTML='';

    for(let i = 0; i < lista_bitacora.length; i++){
        let fila = tbody.insertRow();

        let celdaEscogerProyecto = fila.insertCell();
        let celdaHorasLaboradas = fila.insertCell();
        let celdaObservaciones = fila.insertCell();
        let celdaTotalHoras = fila.insertCell();

        celdaEscogerProyecto.innerHTML = lista_bitacora[i][0];
        celdaHorasLaboradas.innerHTML = lista_bitacora[i][1];
        celdaObservaciones.innerHTML = lista_bitacora[i][2];
        celdaTotalHoras.innerHTML = lista_bitacora[i][3];
    }

};