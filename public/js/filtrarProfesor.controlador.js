'use strict';

let inputFilter = document.querySelector('#txtFilter');
let inputTipo = document.querySelector('#txtTipo')

let botonFilter = document.querySelector('#btnFilter');
botonFilter.addEventListener('click', obtenerProf);

function obtenerProf(){
    let listaProfesores = filtrarProfesor(inputTipo.value, inputFilter.value);
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead=thead.insertRow();
    let nombre_completo=filaHead.insertCell();
    let profesion=filaHead.insertCell();
    let universidad=filaHead.insertCell();
    let telefono=filaHead.insertCell();
    let correo=filaHead.insertCell();
    let experiencia=filaHead.insertCell();
    let fechaNacimiento=filaHead.insertCell();
    let cursos=filaHead.insertCell();
    let titulos=filaHead.insertCell();
    let foto=filaHead.insertCell();
    let provincia=filaHead.insertCell();
    let direccion=filaHead.insertCell();
    let cedula=filaHead.insertCell();

    nombre_completo.innerHTML = "nombre_completo";
    profesion.innerHTML = "profesion";
    universidad.innerHTML = "universidad";
    telefono.innerHTML = "telefono";
    correo.innerHTML = "correo";
    experiencia.innerHTML = "experiencia";
    fechaNacimiento.innerHTML = "fechaNacimiento";
    cursos.innerHTML = "cursos";
    titulos.innerHTML = "titulos";
    foto.innerHTML = "foto";
    provincia.innerHTML = "provincia";
    direccion.innerHTML = "direccion";
    cedula.innerHTML = "cedula";
   

    for(let i = 0; i < listaProfesores.length; i++){
        let fila = tbody.insertRow();

        let cnombre_completo = fila.insertCell();
        let cprofesion = fila.insertCell();
        let cuniversidad = fila.insertCell();
        let ctelefono = fila.insertCell();
        let ccorreo = fila.insertCell();
        let cexperiencia = fila.insertCell();
        let cfechaNacimiento = fila.insertCell();
        let ccursos = fila.insertCell();
        let ctitulos = fila.insertCell();
        let cfoto = fila.insertCell();
        let cprovincia = fila.insertCell();
        let cdireccion = fila.insertCell();
        let ccedula = fila.insertCell();
        let ccontrasenna = fila.insertCell();

        cnombre_completo.innerHTML = listaProfesores[i]['nombre_completo'];
        cprofesion.innerHTML = listaProfesores[i]['profesion'];
        cuniversidad.innerHTML = listaProfesores[i]['universidad'];
        ctelefono.innerHTML = listaProfesores[i]['telefono'];
        ccorreo.innerHTML = listaProfesores[i]['correo'];
        cexperiencia.innerHTML = listaProfesores[i]['experiencia'];
        cfechaNacimiento.innerHTML = listaProfesores[i]['fechaNacimiento'];
        ccursos.innerHTML = listaProfesores[i]['cursos'];
        ctitulos.innerHTML = listaProfesores[i]['titulos'];
        cfoto.innerHTML = listaProfesores[i]['foto'];
        cprovincia.innerHTML = listaProfesores[i]['provincia'];
        cdireccion.innerHTML = listaProfesores[i]['direccion'];
        ccedula.innerHTML = listaProfesores[i]['cedula'];
        ccontrasenna.innerHTML = listaProfesores[i]['contrasenna'];
    }

};