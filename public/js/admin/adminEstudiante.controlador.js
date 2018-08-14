'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const fechaNc = document.querySelector('#fechaNc');
const direccion = document.querySelector('#direccion');
const contactoEmer = document.querySelector('#contactoEmer');
const telEmer = document.querySelector('#telEmer');
const foto = document.querySelector('#foto');
const Registrar = document.querySelector('#registrar');


const editNombre = document.querySelector('#editNombre');
const editCedula = document.querySelector('#editCedula');
const editTelefono = document.querySelector('#editTelefono');
const editCorreo = document.querySelector('#editCorreo');
const editFechaNc = document.querySelector('#editFechaNc');
const editDireccion = document.querySelector('#editDireccion');
const editContactoEmer = document.querySelector('#editContactoEmer');
const editTelEmer = document.querySelector('#editTelEmer');
const editFoto = document.querySelector('#editFoto');
const editId = document.querySelector('#editId');
const btnEditar = document.querySelector('#btnEditar');
const btnCancelar = document.querySelector('#Cancelar');

const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarEstudiante);
btnEditar.addEventListener('click',editarFormulario);
btnCancelar.addEventListener('click',cancelar);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaEstudiantes();


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
    let estudiante=[];
    estudiante.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        fechaNc.value,
        direccion.value,
        contactoEmer.value,
        telEmer.value,
        foto.value,
    );

    let validar = validarFormulario();

    if(validar){
    }else{
        let respuesta=registrarEstudiante(estudiante);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
        }else{
            toastr.success(respuesta.msj);
            imprimirListaEstudiantes();
        }
    }

}

function validarFormulario(){
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexCedula = /^[1-9]-?\d{4}-?\d{4}$/;
    let regexTelefono = /^([0-9]+){9}$/;
    let regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regexFecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    let respuesta=false;

    if (nombre.value == '' || (regexSoloLetras.test(nombre.value) == false)) {
        nombre.classList.add('error_input');
        toastr.error("Campo Nombre no puede estar vacio y solo acepta letras");
        respuesta=true;
    } else {
        nombre.classList.remove('error_input');
    }

    if (cedula.value == null || (regexCedula.test(cedula.value) == false)){
        cedula.classList.add('error_input');
        toastr.error("Campo Cedula no puede estar vacio y solo acepta numeros");
        respuesta = true;
    } else {
        cedula.classList.remove('error_input');
    }

    /*if (telefono.value == null || (regexTelefono.test(telefono.value) == false)) {
        telefono.classList.add('error_input');
        respuesta = true;
        toastr.error("Campo Telefono no puede estar vacio y solo acepta numeros");
    } else {
        telefono.classList.remove('error_input');
    }*/

    if (correo.value == null || (regexCorreo.test(correo.value) == false)) {
        correo.classList.add('error_input');
        toastr.error("Campo Correo no puede estar vacio y solo acepta direcciones validas");
        respuesta = true;
    } else {
        let revisarCorreo = comprobarCorreo(correo.value);
        if(revisarCorreo['_result']){
            toastr.error('Correo se encuentra ya registrado');
        }else{
            correo.classList.remove('error_input');
        }
    }

    if (fechaNc.value == null) {
        fechaNc.classList.add('error_input');
        toastr.error("Campo Fecha no puede estar vacio");
        respuesta = true;
    } else {
        fechaNc.classList.remove('error_input');
    }

    if (direccion.value == '' || direccion.value == null) {
        direccion.classList.add('error_input');
        toastr.error("Campo Direccion no puede estar vacio");
        respuesta = true;
    } else {
        direccion.classList.remove('error_input');
    }

    if (contactoEmer.value == null || (regexSoloLetras.test(contactoEmer.value) == false)) {
        contactoEmer.classList.add('error_input');
        toastr.error("Campo Contacto no puede estar vacio y solo acepta letras");
        respuesta = true;
    } else {
        contactoEmer.classList.remove('error_input');
    }

    /*if (telEmer.value == null || (regexTelefono.test(telEmer.value) == false)) {
        telEmer.classList.add('error_input');
        toastr.error("Campo Telefono Contacto no puede estar vacio y solo acepta numeros");
        respuesta = true;
    } else {
        telEmer.classList.remove('error_input');
    }*/

    return respuesta;
}

function imprimirListaEstudiantes(){
    let listaEstudiantes = obtenerListaEstudiantes();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstudiantes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaEstudiantes[i]['nombre'];
        ccedula.innerHTML = listaEstudiantes[i]['cedula'];
        ctelefono.innerHTML = listaEstudiantes[i]['telefono'];
        ccorreo.innerHTML = listaEstudiantes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaEstudiantes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaEstudiantes[i]['_id']).onclick= function() {
            let estudiante=filtrarEstudiantes("3",this.id);
            editNombre.value=estudiante[0]['nombre'];
            editCedula.value=estudiante[0]['cedula'];
            editTelefono.value=estudiante[0]['telefono'];
            editCorreo.value=estudiante[0]['correo'];
            editFechaNc.value=estudiante[0]['fechaNc'];
            editDireccion.value=estudiante[0]['direccion'];
            editContactoEmer.value=estudiante[0]['contactoEmer'];
            editTelEmer.value=estudiante[0]['telEmer'];
            editFoto.value=estudiante[0]['foto'];
            editId.value=this.id;
            document.querySelector('#editFotoShow').src= editFoto.value;
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        }
        
    }

};

function buscarEstudiante(){
    let listaEstudiantes = filtrarEstudiantes("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEstudiantes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaEstudiantes[i]['nombre'];
        ccedula.innerHTML = listaEstudiantes[i]['cedula'];
        ctelefono.innerHTML = listaEstudiantes[i]['telefono'];
        ccorreo.innerHTML = listaEstudiantes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaEstudiantes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaEstudiantes[i]['_id']).onclick= function() {
            let estudiante=filtrarEstudiantes("3",this.id);
            editNombre.value=estudiante[0]['nombre'];
            editCedula.value=estudiante[0]['cedula'];
            editTelefono.value=estudiante[0]['telefono'];
            editCorreo.value=estudiante[0]['correo'];
            editFechaNc.value=estudiante[0]['fechaNc'];
            editDireccion.value=estudiante[0]['direccion'];
            editContactoEmer.value=estudiante[0]['contactoEmer'];
            editTelEmer.value=estudiante[0]['telEmer'];
            editFoto.value=estudiante[0]['foto'];
            editId.value=this.id;
            document.querySelector('#editFotoShow').src= editFoto.value;
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        };
    }

};


function editarFormulario() {
    let estudiante=[];
    estudiante.push(
        editNombre.value,
        editCedula.value,
        editTelefono.value,
        editCorreo.value,
        editFechaNc.value,
        editDireccion.value,
        editContactoEmer.value,
        editTelEmer.value,
        editFoto.value
    );

    let validar = validarEditar();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=actualizarEstudiante(editId.value,estudiante);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
            $('.edit-box').slideUp();
            $('.tab').slideDown();
        }else{
            toastr.success(respuesta.msj);
            imprimirListaEstudiantes();
            $('.edit-box').slideUp();
            $('.tab').slideDown();
        }
    }

}

function validarEditar(){
    let respuesta=false;

    if(editNombre.value== null || editNombre.value==""){
        respuesta=true;
    }

    if (editCedula.value == null || editCedula.value==""){
        respuesta=true;
    }

    if (editTelefono.value == null || editTelefono.value==""){
        respuesta=true;
    }

    if (editCorreo.value == null || editCorreo.value ==""){
        respuesta=true;
    }

    if (editFechaNc.value == null || editFechaNc.value ==""){
        respuesta=true;
    }

    if (editDireccion.value == null || editDireccion.value ==""){
        respuesta=true;
    }

    if (editContactoEmer.value == null || editContactoEmer.value ==""){
        respuesta=true;
    }

    if (editTelEmer.value == null || editTelEmer.value ==""){
        respuesta=true;
    }

    return respuesta;
}


function cancelar() {
    toastr.warning('Editar cancelado');
    $('.edit-box').slideUp();
    $('.tab').slideDown();
}
