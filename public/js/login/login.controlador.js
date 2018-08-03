'use strict'

const BotonLogin = document.querySelector('#loginButton');
const InputCorreo = document.querySelector('#correo');
const InputContrasena = document.querySelector('#contrasena');

BotonLogin.addEventListener('click',login);

function login(){
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
               toastr.success('Bienvenido '+respuesta['nombre']);

               switch(respuesta['tipo']){
                   case "0":
                   toastr.success('Administrador')
                   break;

                   case "1":
                   toastr.success('Estudiante')
                   break;

                   case "2":
                   toastr.success('Profesor')
                   break;

                   case "3":
                   toastr.success('Cliente')
                   break;
               }
           }
        }
}

function validar() {
    return false;
}