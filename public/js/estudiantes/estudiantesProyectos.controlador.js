'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const empresaProyecto=document.querySelector('#empresaProyecto');
const Lider=document.querySelector('#Lider');
const LiderTecnico=document.querySelector('#LiderTecnico');
const Estudiantes=document.querySelector('#Estudiantes');
const descripcion=document.querySelector('#descripcion');
const btnCliente=document.querySelector('#btnCliente');
const btnRegistrar=document.querySelector('#btnRegistrar');

const btnVolver=document.querySelector('#Volver');
const btnVolver2=document.querySelector('#Volver2');
const btnVolver3=document.querySelector('#Volver3');
const Cancelar=document.querySelector('#Cancelar');

const submitMensaje=document.querySelector('#submitMensaje');

const Buscar =document.querySelector('#buscar');
const btnVer=document.querySelector('#verEstudiantes');

btnVolver.addEventListener('click',volver);
btnVolver2.addEventListener('click',volver2);
btnVolver3.addEventListener('click',volver3);
btnCliente.addEventListener('click',mostrarCliente);
btnRegistrar.addEventListener('click',registrar);
//btnVer.addEventListener('click',obtenerEstudiantesProyecto);
submitMensaje.addEventListener('click',enviarMensaje);
Cancelar.addEventListener('click',cancelar);
Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=1){
        window.location.assign(baseUrl+'/public/logIn.html');
    }else{
        mostrarProyectos();
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.assign(baseUrl+'/public/logIn.html');
}

function mostrarProyectos(){
    let listaProyectos = filtrarProyectos("5",sessionStorage.getItem('id'));
    let tbody = document.querySelector('#table-proyectos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();
        
        let cnombre= fila.insertCell();
        let cempresa= fila.insertCell();
        let cestado= fila.insertCell();
        let editar= fila.insertCell();

        cnombre.innerHTML = listaProyectos[i]['nombre'];
        cempresa.innerHTML = listaProyectos[i]['empresa_nombre'];
        cestado.innerHTML = listaProyectos[i]['estado'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaProyectos[i]['_id']+'"><i class="fas fa-eye"></i></button>';

        document.getElementById(listaProyectos[i]['_id']).onclick= function() {
            obtenerProyectoSeleccionado(this.id);
        }
        
    }
}

function obtenerProyectoSeleccionado(id_proyecto){
    let proyectos = filtrarProyectos("3",id_proyecto);
    document.querySelector('#idProyecto').value=proyectos[0]['_id'];
    document.querySelector('#idCliente').value=proyectos[0]['empresa'];
    document.querySelector('#nombreProyecto').textContent=proyectos[0]['nombre'];
    document.querySelector('#descripcion').textContent=proyectos[0]['descripcion'];

    let tbody2= document.querySelector('#table-tickets tbody');
    tbody2.innerHTML="";

    for(let j=0; j <proyectos[0]['tickets'].length;j++){
        let fila2=tbody2.insertRow();
        let titulo= fila2.insertCell();
        let estudiante= fila2.insertCell();
        let estado= fila2.insertCell();
        let descripcion= fila2.insertCell();
        let ticketId=fila2.insertCell();

        titulo.innerHTML=proyectos[0]['tickets'][j]['titulo'];
        estudiante.innerHTML=proyectos[0]['tickets'][j]['estudiante'];
        if(proyectos[0]['tickets'][j]['estado']==0){
            estado.innerHTML="Sin Aprobar";
        }else{
            if(proyectos[0]['tickets'][j]['estado']==1){
                estado.innerHTML="Abierto";
            }else{
                estado.innerHTML="Cerrado";
            }
        }
        descripcion.innerHTML=proyectos[0]['tickets'][j]['descripcion'];
        ticketId.innerHTML= '<button type="button" class="editButton" id="'+proyectos[0]['tickets'][j]['_id']+'"><i class="fas fa-eye"></i></button>';

        document.getElementById(proyectos[0]['tickets'][j]['_id']).onclick= function() {
            toastr.success(this.id);
        }
    }
    let mensaje ='';
    let chat=document.querySelector('#chat');
    while (chat.firstChild) {
        chat.removeChild(chat.firstChild);
    }
    for(let y=0; y<proyectos[0]['chat'].length;y++){
        if(proyectos[0]['chat'][y]['id_user']==sessionStorage.getItem('id')){
            mensaje= mensaje+'<div class="message message-personal">'+proyectos[0]['chat'][y]['mensaje']+'</div>';
        }else{
            mensaje= mensaje+' <div class="message new"><figure class="avatar"><img src="img/user.png" /></figure>'+proyectos[0]['chat'][y]['mensaje']+'</div>';
        }
    }
    chat.innerHTML=mensaje;

    $('#view1').slideUp();
    $('#view2').slideDown();
}


function enviarMensaje(){
    let mensajeContenido=[];
    mensajeContenido.push(
        sessionStorage.getItem('id'),
        document.querySelector('#mensajeTexto').value
    );
    let respuesta=crearMensaje( document.querySelector('#idProyecto').value,mensajeContenido);

    if(respuesta.success){
        let proyectos = filtrarProyectos("3",document.querySelector('#idProyecto').value);
        let mensaje ='';
        let chat=document.querySelector('#chat');
        while (chat.firstChild) {
            chat.removeChild(chat.firstChild);
        }
        for(let y=0; y<proyectos[0]['chat'].length;y++){
            if(proyectos[0]['chat'][y]['id_user']==sessionStorage.getItem('id')){
                mensaje= mensaje+'<div class="message message-personal">'+proyectos[0]['chat'][y]['mensaje']+'</div>';
            }else{
                mensaje= mensaje+' <div class="message new"><figure class="avatar"><img src="img/user.png" /></figure>'+proyectos[0]['chat'][y]['mensaje']+'</div>';
            }
        }
        chat.innerHTML=mensaje;
    }else{
        toastr.error("No se ha podido registrar mensaje");
    }
}

function mostrarCliente() {
    let clientes = filtrarClientes("3",document.querySelector('#idCliente').value);
            document.querySelector('#nombre').value=clientes[0]['nombre'];
            document.querySelector('#cedula').value=clientes[0]['cedula'];
            document.querySelector('#telefono').value=clientes[0]['telefono'];
            document.querySelector('#correo').value=clientes[0]['correo'];
            document.querySelector('#contactoNombre').value=clientes[0]['contacto']['nombre'];
            document.querySelector('#contactoTel').value=clientes[0]['contacto']['telefono'];
            document.querySelector('#contactoEmail').value=clientes[0]['contacto']['correo'];
            document.querySelector('#currentFoto').src=clientes[0]['foto'];
            mapa(clientes[0]['latitud'],clientes[0]['longitud']);

            $('#view2').slideUp();
            $('#view3').slideDown();
}


function volver(){
    $('#view3').slideUp();
    $('#view2').slideDown();
}

function volver2(){
    $('#view4').slideUp();
    $('#view2').slideDown();
}

function volver3(){
    $('#view5').slideUp();
    $('#view2').slideDown();
}

function registrar(){
    $('#view2').slideUp();
    $('#view4').slideDown();
}

function cancelar(){
    $('#view2').slideUp();
    $('#view1').slideDown();
}
