'use strict';

const baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
const Salir = document.querySelector('#salir');

const nombre = document.querySelector('#nombre');
const cedula = document.querySelector('#cedula');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const contactoNombre = document.querySelector('#contactoNombre');
const contactoTel = document.querySelector('#contactoTel');
const contactoEmail = document.querySelector('#contactoEmail');
const foto = document.querySelector('#foto');
const latitude =document.querySelector('#latitude');
const longitude =document.querySelector('#longitude');
const Registrar = document.querySelector('#registrar');


const editNombre = document.querySelector('#editNombre');
const editCedula = document.querySelector('#editCedula');
const editTelefono = document.querySelector('#editTelefono');
const editCorreo = document.querySelector('#editCorreo');
const editContactoNombre = document.querySelector('#editContactoNombre');
const editContactoTel = document.querySelector('#editContactoTel');
const editContactoEmail = document.querySelector('#editContactoEmail');
const editFoto = document.querySelector('#editFoto');
const editId = document.querySelector('#editId');
const btnEditar = document.querySelector('#btnEditar');
const btnCancelar = document.querySelector('#Cancelar');


const Buscar =document.querySelector('#buscar');
const btnBuscar=document.querySelector('#btnBuscar');



Registrar.addEventListener('click',registrarFormulario);
btnBuscar.addEventListener('click',buscarCliente);
btnEditar.addEventListener('click',editarFormulario);
btnCancelar.addEventListener('click',cancelar);
Salir.addEventListener('click',cerrarSesion);


Comprobar();
imprimirListaClientes();


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
    let cliente=[];
    cliente.push(
        nombre.value,
        cedula.value,
        telefono.value,
        correo.value,
        contactoNombre.value,
        contactoEmail.value,
        contactoTel.value,
        foto.value,
        latitude.value,
        longitude.value
    );

    let validar = validarFormulario();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=registrarCliente(cliente);
        if(respuesta.success==false){
            toastr.error(respuesta.msj);
        }else{
            toastr.success(respuesta.msj);
            imprimirListaClientes();
        }
    }

}

function validarFormulario(){
   
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^ ([0 - 9]) * $ /;
    let regexCedula = /^[1-9]-?\d{4}-?\d{4}$/;
    let regexTelefono = /^([0-9]+){9}$/;
    let regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regexFecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    let regexFoto = /.(gif|jpeg|jpg|png)$/;
    let respuesta = false;

    if (nombre.value == '' || (regexSoloLetras.test(nombre.value) == false)) {
        nombre.classList.add('error_input');
        toastr.error('Campo Nombre no puede estar vacio y solo acepta letras');
        respuesta = true;
    } else {
        nombre.classList.remove('error_input');
    }

    if (cedula.value == null || (regexCedula.test(cedula.value) == false)) {
        cedula.classList.add('error_input');
        toastr.error('Campo Cedula no puede estar vacio y solo acepta numeros');
        respuesta = true;
    } else {
        cedula.classList.remove('error_input');
    }

    /*if (telefono.value == null || (regexTelefono.test(telefono.value) == false)) {
        telefono.classList.add('error_input');
        respuesta = true;
    } else {
        telefono.classList.remove('error_input');
    }*/

    if (correo.value == null || (regexCorreo.test(correo.value) == false)) {
        correo.classList.add('error_input');
        toastr.error('Campo Correo no puede estar vacio');
        respuesta = true;
    } else {
        let revisarCorreo = comprobarCorreo(correo.value);
        if(revisarCorreo['_result']){
            toastr.error('Correo se encuentra ya registrado');
        }else{
            correo.classList.remove('error_input');
        }
    }

    if (contactoNombre.value == '' || (regexSoloLetras.test(contactoNombre.value) == false)) {
        contactoNombre.classList.add('error_input');
        toastr.error('Campo Nombre Contacto no puede estar vacio y solo acepta letras');
        respuesta = true;
    } else {
        contactoNombre.classList.remove('error_input');
    }

    /*if (contactoTel.value == '' || (regexSoloNumeros.test(contactoTel.value) == false)) {
        contactoTel.classList.add('error_input');
        respuesta = true;
    } else {
        contactoTel.classList.remove('error_input');
    }*/

    if (contactoEmail.value == null || (regexCorreo.test(contactoEmail.value) == false)) {
        contactoEmail.classList.add('error_input');
        respuesta = true;
    } else {
        contactoEmail.classList.remove('error_input');
    }

    /*if (foto.value == null || (regexFoto.test(foto.value) == false)) {
        foto.classList.add('error_input');
        respuesta = true;
    } else {
        foto.classList.remove('error_input');
    }*/

    return respuesta;
}

function imprimirListaClientes(){
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaClientes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaClientes[i]['_id']).onclick= function() {
            let clientes = filtrarClientes("3",this.id);
            editNombre.value=clientes[0]['nombre'];
            editCedula.value=clientes[0]['cedula'];
            editTelefono.value=clientes[0]['telefono'];
            editCorreo.value=clientes[0]['correo'];
            editContactoNombre.value=clientes[0]['contacto']['nombre'];
            editContactoTel.value=clientes[0]['contacto']['telefono'];
            editContactoEmail.value=clientes[0]['contacto']['correo'];
            editFoto.value=clientes[0]['foto'];
            mapa2(clientes[0]['latitud'],clientes[0]['longitud'])
            editId.value=this.id;
            document.querySelector('#editFotoShow').src= editFoto.value;
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        }
        
    }

};

function buscarCliente(){
    let listaClientes = filtrarClientes("1",Buscar.value);
    let tbody = document.querySelector('#table-users tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cnombre= fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let editar = fila.insertCell();
        
        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        editar.innerHTML = '<button type="button" class="editButton" id="'+listaClientes[i]['_id']+'"><i class="fas fa-edit"></i></button>';

        document.getElementById(listaClientes[i]['_id']).onclick= function() {
            let clientes = filtrarClientes("3",this.id);
            editNombre.value=clientes[0]['nombre'];
            editCedula.value=clientes[0]['cedula'];
            editTelefono.value=clientes[0]['telefono'];
            editCorreo.value=clientes[0]['correo'];
            editContactoNombre.value=clientes[0]['contacto']['nombre'];
            editContactoTel.value=clientes[0]['contacto']['telefono'];
            editContactoEmail.value=clientes[0]['contacto']['correo'];
            editFoto.value=clientes[0]['foto'];
            mapa2(clientes[0]['latitud'],clientes[0]['longitud'])
            editId.value=this.id;
            document.querySelector('#editFotoShow').src= editFoto.value;
            $('.tab').slideUp();
            $('.edit-box').slideDown();
        }
        
    }

};


function editarFormulario() {
    let Cliente=[];
    Cliente.push(
        editNombre.value,
        editCedula.value,
        editTelefono.value,
        editCorreo.value,
        editContactoNombre.value,
        editContactoEmail.value,
        editContactoTel.value,
        editFoto.value
    );

    let validar = validarEditar();

    if(validar){
        toastr.warning('Por favor llene los campos');
    }else{
        let respuesta=actualizarCliente(editId.value,Cliente);
        if(respuesta.success == false){
            toastr.error(respuesta.msj);
            $('.edit-box').slideUp();
            $('.tab').slideDown();
        }else{
            toastr.success(respuesta.msj);
            imprimirListaClientes();
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
    return respuesta;
}


function cancelar() {
    toastr.warning('Editar cancelado');
    $('.edit-box').slideUp();
    $('.tab').slideDown();
}
