'use strict'
let botonGuardar = document.querySelector('#btnGuardar');

botonGuardar.addEventListener('click', obtenerDatos);

let inputEscogerProyecto = document.querySelector('#mostrarProyectos');
let inputHorasLaboradas = document.querySelector('#txtHorasLaboradas');
let inputObservaciones = document.querySelector('#txtObservaciones');
let inputTotalHoras = document.querySelector('#txtTotal');

function obtenerDatos(){
    let infoBitacora =[];
    let bError = false;

    let contrasenna= Math.random().toString(36).substring(7);
    infoBitacora.push(
        inputEscogerProyecto.value,
        inputHorasLaboradas.value,
        inputObservaciones.value,
        inputTotalHoras.value 
    );
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar bitacora',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar bitacora');
    }else{
        registrarBitacora(infoBitacora);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'Bitacora se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }
    
};

function validar(){
    return false;
}

function limpiarFormulario(){

}