'use strict';

//imprimirListaProfesores();

const botonRegistrar = document.querySelector('#btnRegistrar');
const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');
//botonRegistrar.addEventListener('click', obtenerDatos);

const empresaProyecto=document.querySelector('#empresaProyecto');
const Lider=document.querySelector('#Lider');
const LiderTecnico=document.querySelector('#LiderTecnico');
const Estudiantes=document.querySelector('#Estudiantes');
const descripcion=document.querySelector('#descripcion');
const btnCliente=document.querySelector('#btnCliente');
const Cancelar=document.querySelector('#Cancelar');

const submitMensaje=document.querySelector('#submitMensaje');

btnCliente.addEventListener('click',mostrarCliente);
submitMensaje.addEventListener('click',enviarMensaje);
Cancelar.addEventListener('click',cancelar);
Salir.addEventListener('click',cerrarSesion);

Comprobar();

function Comprobar() {
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=2){
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
    document.querySelector('#empresaProyecto').textContent="Empresa: "+proyectos[0]['empresa_nombre'];
    /*
    document.querySelector('#Lider').textContent="Lider: "+proyectos[0]['equipo'][0]['id_user'];
    document.querySelector('#LiderTecnico').textContent="Lider Tecnico: "+proyectos[0]['equipo'][1]['id_user'];
    document.querySelector('#Estudiantes').innerHTML="<p>Test</p>"*/
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


function cancelar(){
    $('#view2').slideUp();
    $('#view1').slideDown();
}