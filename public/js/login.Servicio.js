'use strict';
function getListaUsuarios() {
    let mListaProfesores = null;
    let mListaEstudiantes = null;

     if (mListaProfesores == null) {
         mListaProfesores =
             [
                 ['001', 'loha', '1234', 'Lohana Piedra Montero', 'Administrador'],
                 ['002', 'lohaa', '1234', 'Lohana Piedra Montero', 'Cliente']
             ];
     }
     if (mListaEstudiantes == null) {
         mListaEstudiantes =
             [
                 ['001', 'loha', '1234', 'Lohana Piedra Montero', 'Administrador'],
                 ['002', 'lohaa', '1234', 'Lohana Piedra Montero', 'Cliente']
             ];
     }
    for (let i = 0; i < mListaEstudiantes.length; i++) {
        mListaProfesores.push(mListaEstudiantes[i]);
    }
    let mListaUsuarios =mListaProfesores;
    return mListaUsuarios;
}

function autenticarUsuario(psCorreo, psContrasenna) {

    let mListaUsuarios = getListaUsuarios();
    let sMensaje = '';

   for (var i = 0; i <=mListaUsuarios.length; i++) {
       if (mListaUsuarios[i][1] == psCorreo && mListaUsuarios[i][2] == psContrasenna) {
            sessionStorage.setItem('usuarioActivo', JSON.stringify(mListaUsuarios[i]));
           redireccionarUsuario(mListaUsuarios[i][4]);
            i=mListaUsuarios.length+1;
            break;
        } else {
            if(i==mListaUsuarios.length){
                swal(
                    '¡Ooops!',
                    'Datos incorrectos',
                    'warning'
                );
            }
        }
    }
}

function cerrarSesion() {
    sessionStorage.clear();
    windows.location.href = "landing.html";
}

function redireccionarUsuario(rollDelUsuario) {
    switch (rollDelUsuario) {
        case 'Administrador':
            window.location.href = "indexAdministrador.html";
            break;
        case 'Cliente':
            console.log('cliente');
            //window.location.href = "indexCliente.html";
            break;
        case 'Profesor':
            console.log('prof');
            //window.location.href = "indexProfesor.html";
            break;
        case 'Estudiante':
            console.log('est');
            window.location.href = "indexEstudiante.html";
            break;
    }
}

function getUsuarioAutenticado() {
    let usuarioAutenticado = JSON.parse(sessionStorage.getItem('usuarioActivo'));
    return usuarioAutenticado;
}