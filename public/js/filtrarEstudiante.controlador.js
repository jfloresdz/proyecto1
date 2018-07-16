'use strict';

let inputFilter = document.querySelector('#txtFilter');
let inputTipo = document.querySelector('#txtTipo')

let botonFilter = document.querySelector('#btnFilter');
botonFilter.addEventListener('click', obtenerEst);

function obtenerEst(){
    let listaEstudiantes = filtrarEstudiantes(inputTipo.value,inputFilter.value);
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead = thead.insertRow();

    let nombre=filaHead.insertCell();
    let cedula=filaHead.insertCell();
    let telefono=filaHead.insertCell();
    let correo=filaHead.insertCell();
    let fechaNc=filaHead.insertCell();
    let estadoCivil=filaHead.insertCell();
    let nacionalidad=filaHead.insertCell();
    let lugarResidencia=filaHead.insertCell();
    let contactoEmer=filaHead.insertCell();
    let TelEmer=filaHead.insertCell();

    nombre .innerHTML = " nombre";
    cedula .innerHTML = "cedula";
    telefono .innerHTML = "telefono";
    correo .innerHTML = "correo";
    fechaNc .innerHTML = "fechaNc";
    estadoCivil .innerHTML = "estadoCivil";
    nacionalidad .innerHTML = "nacionalidad";
    lugarResidencia .innerHTML = "lugarResidencia";
    contactoEmer .innerHTML = "contactoEmer";
    TelEmer .innerHTML = "TelEmer";


    for(let i = 0; i < listaEstudiantes.length; i++){
        let fila = tbody.insertRow();
        let cnombre = fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let cfechaNc= fila.insertCell();
        let cestadoCivil= fila.insertCell();
        let cnacionalidad= fila.insertCell();
        let clugarResidencia= fila.insertCell();
        let ccontactoEmer= fila.insertCell();
        let cTelEmer= fila.insertCell();

        cnombre.innerHTML  = listaEstudiantes[i]['nombre'];
        ccedula.innerHTML = listaEstudiantes[i]['cedula'];
        ctelefono.innerHTML = listaEstudiantes[i]['telefono'];
        ccorreo.innerHTML = listaEstudiantes[i]['correo'];
        cfechaNc.innerHTML = listaEstudiantes[i]['fechaNc'];
        cestadoCivil.innerHTML = listaEstudiantes[i]['estadoCivil'];
        cnacionalidad.innerHTML = listaEstudiantes[i]['nacionalidad'];
        clugarResidencia.innerHTML = listaEstudiantes[i]['lugarResidencia'];
        ccontactoEmer.innerHTML = listaEstudiantes[i]['contactoEmer'];
        cTelEmer.innerHTML = listaEstudiantes[i]['TelEmer'];
    }

};