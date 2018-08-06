'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const profesion = document.querySelector('#profesion');
const experiencia = document.querySelector('#experiencia');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const foto = document.querySelector('#foto');
const direccion= document.querySelector('#direccion');
const Registrar = document.querySelector('#registrar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarProfesor);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaProfesores();


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
    let Profesor=[];
    Profesor.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        profesion.value,
        experiencia.value,
        fechaNacimiento.value,
        foto.value,
        direccion.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarProfesor(Profesor);
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

    return respuesta;
}

function imprimirListaProfesores(){
    let listaProfesores = obtenerListaProfesores();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaProfesores[i]['nombre'];
        ccedula.innerHTML = listaProfesores[i]['cedula'];
        ctelefono.innerHTML = listaProfesores[i]['telefono'];
        ccorreo.innerHTML = listaProfesores[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProfesores[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaProfesores[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
        
    }

};

function buscarProfesor(){
    let listaProfesores = filtrarProfesores("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaProfesores[i]['nombre'];
        ccedula.innerHTML = listaProfesores[i]['cedula'];
        ctelefono.innerHTML = listaProfesores[i]['telefono'];
        ccorreo.innerHTML = listaProfesores[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProfesores[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaProfesores[i]['_id']).onclick= function() {
            toastr.success(this.id);
            console.log('working');
        }
        
    }

};
