'use strict'

const BotonLogin = document.querySelector('#loginButton');
const InputCorreo = document.querySelector('#correo');
const InputContrasena = document.querySelector('#contrasena');

BotonLogin.addEventListener('click',login);

function login(){
    let baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
    let bError = false;
    let respuesta = [];
    
        bError = validar();

        if(bError == true){
            toastr.warning('Por favor llene los campos');
        }else{
            respuesta=loginServicio(InputCorreo.value,InputContrasena.value);
           if(respuesta.length==0){
            toastr.error('Usuario o contrasena no validos');
           }else{
               sessionStorage.setItem("id",respuesta['_id']);
               sessionStorage.setItem("nombre",respuesta['nombre']);
               sessionStorage.setItem("tipo",respuesta['tipo']);
               toastr.success('Bienvenid@ '+respuesta['nombre']);

               switch(respuesta['tipo']){
                   case "0":
                   window.location.assign(baseUrl+"/public/adminIndex.html");
                   break;

                   case "1":
                   window.location.assign(baseUrl+"/public/estudianteIndex.html");
                   break;

                   case "2":
                   window.location.assign(baseUrl+"/public/profesorIndex.html");
                   break;

                   case "3":
                   window.location.assign(baseUrl+"/public/clienteIndex.html");
                   break;
               }
           }
        }
}

function validar() {
    let resultado = false

    if(InputContrasena.value =='' || InputContrasena ==null || InputCorreo == '' || InputCorreo == null ){
        resultado = true
    }

    return resultado;
}