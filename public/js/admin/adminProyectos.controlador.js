'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const empresa = document.querySelector('#empresa');
const descripcion= document.querySelector('#descripcion');
const tecnico= document.querySelector('#tecnico');
const lider = document.querySelector('#lider');

const Registrar = document.querySelector('#registrar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarProyecto);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
llenarSelects();
imprimirListaProyectos();


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
    let Proyecto=[];
    Proyecto.push(
        nombre.value,
        empresa.value,
        descripcion.value,
        tecnico.value,
        lider.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarProyecto(Proyecto);
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

    if (lider.value == null || lider.value==""){
        respuesta=true;
    }

    if (empresa.value == null || empresa.value==""){
        respuesta=true;
    }

    if (tecnico.value == null || tecnico.value ==""){
        respuesta=true;
    }

    return respuesta;
}

function imprimirListaProyectos(){
    let listaProyectos = obtenerListaProyectos();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();
        
        let cnombre= fila.insertCell();
        let cempresa= fila.insertCell();
        let cfechaCreacion= fila.insertCell();
        let cfechaFin= fila.insertCell();
        let cestado= fila.insertCell();
        let editar= fila.insertCell();

        cnombre.innerHTML = listaProyectos[i]['nombre'];
        cempresa.innerHTML = listaProyectos[i]['empresa'];
        cfechaCreacion.innerHTML = listaProyectos[i]['fechaCreacion'];
        cfechaFin.innerHTML = listaProyectos[i]['fechaFin'];
        cestado.innerHTML = listaProyectos[i]['estado'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProyectos[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaProyectos[i]['_id']).onclick= function() {
            toastr.success(this.id);
        }
        
    }

};

function buscarProyecto(){
    let listaProyectos = filtrarProyectos("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();
        
        let cnombre= fila.insertCell();
        let cempresa= fila.insertCell();
        let cfechaCreacion= fila.insertCell();
        let cfechaFin= fila.insertCell();
        let cestado= fila.insertCell();
        let editar= fila.insertCell();

        cnombre.innerHTML = listaProyectos[i]['nombre'];
        cempresa.innerHTML = listaProyectos[i]['empresa'];
        cfechaCreacion.innerHTML = listaProyectos[i]['fechaCreacion'];
        cfechaFin.innerHTML = listaProyectos[i]['fechaFin'];
        cestado.innerHTML = listaProyectos[i]['estado'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProyectos[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaProyectos[i]['_id']).onclick= function() {
            toastr.success(this.id);
        }
        
    }
};

function llenarSelects() {
    let profesores =[];
    let empresas =[];

    profesores=obtenerListaProfesores();
    empresas=obtenerListaClientes();

    let option="";

    for (let i=0; i < profesores.length; i ++) {
        option = document.createElement('option');
        option.setAttribute('value', profesores[i]['_id']);
        option.appendChild(document.createTextNode(profesores[i]['nombre']));
        lider.appendChild(option);
    }

    for (let i=0; i < profesores.length; i ++) {
        option = document.createElement('option');
        option.setAttribute('value', profesores[i]['_id']);
        option.appendChild(document.createTextNode(profesores[i]['nombre']));
        tecnico.appendChild(option);
    }

    for (let i=0; i < empresas.length; i ++) {
        option = document.createElement('option');
        option.setAttribute('value', empresas[i]['_id']);
        option.appendChild(document.createTextNode(empresas[i]['nombre']));
        empresa.appendChild(option);
    }
}
