'use strict';

let botonProf = document.querySelector('#btnProf');
botonProf.addEventListener('click', obtenerProf);

let botonBit = document.querySelector('#btnBit');
botonBit.addEventListener('click', obtenerBit);

let botonCli = document.querySelector('#btnCli');
botonCli.addEventListener('click', obtenerCli);

let botonEst = document.querySelector('#btnEst');
botonEst.addEventListener('click', obtenerEst);

let botonProy = document.querySelector('#btnProy');
botonProy.addEventListener('click', obtenerProy);

let botonTick = document.querySelector('#btnTick');
botonTick.addEventListener('click', obtenerTick);

function obtenerProf(){
    let listaTickets = obtenerListaTickets();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    thead.insertCell().innerHTML = "nombreTicket";
    thead.insertCell().innerHTML = "nombreProyecto";
    thead.insertCell().innerHTML = "nombreEncargado";
    thead.insertCell().innerHTML = "telefono";
    thead.insertCell().innerHTML = "descripcion";

    for(let i = 0; i < listaTickets.length; i++){
        let fila = tbody.insertRow();

        let cNombreTicket = fila.insertCell();
        let cNombreProyecto = fila.insertCell();
        let cNombreEncargado = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cDescripcion = fila.insertCell();
        cNombreTicket.innerHTML = listaTickets[i]['nombreTicket'];
        cNombreProyecto.innerHTML = listaTickets[i]['nombreProyecto'];
        cNombreEncargado.innerHTML = listaTickets[i]['nombreEncargado'];
        cTelefono.innerHTML = listaTickets[i]['telefono'];
        cDescripcion.innerHTML = listaTickets[i]['descripcion'];
    }

};

function obtenerBit(){
    let listaTickets = obtenerListaTickets();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    thead.insertCell().innerHTML = "nombreTicket";
    thead.insertCell().innerHTML = "nombreProyecto";
    thead.insertCell().innerHTML = "nombreEncargado";
    thead.insertCell().innerHTML = "telefono";
    thead.insertCell().innerHTML = "descripcion";

    for(let i = 0; i < listaTickets.length; i++){
        let fila = tbody.insertRow();

        let cNombreTicket = fila.insertCell();
        let cNombreProyecto = fila.insertCell();
        let cNombreEncargado = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cDescripcion = fila.insertCell();
        cNombreTicket.innerHTML = listaTickets[i]['nombreTicket'];
        cNombreProyecto.innerHTML = listaTickets[i]['nombreProyecto'];
        cNombreEncargado.innerHTML = listaTickets[i]['nombreEncargado'];
        cTelefono.innerHTML = listaTickets[i]['telefono'];
        cDescripcion.innerHTML = listaTickets[i]['descripcion'];
    }

};

function obtenerCli(){
    let listaTickets = obtenerListaTickets();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    thead.insertCell().innerHTML = "nombreTicket";
    thead.insertCell().innerHTML = "nombreProyecto";
    thead.insertCell().innerHTML = "nombreEncargado";
    thead.insertCell().innerHTML = "telefono";
    thead.insertCell().innerHTML = "descripcion";

    for(let i = 0; i < listaTickets.length; i++){
        let fila = tbody.insertRow();

        let cNombreTicket = fila.insertCell();
        let cNombreProyecto = fila.insertCell();
        let cNombreEncargado = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cDescripcion = fila.insertCell();
        cNombreTicket.innerHTML = listaTickets[i]['nombreTicket'];
        cNombreProyecto.innerHTML = listaTickets[i]['nombreProyecto'];
        cNombreEncargado.innerHTML = listaTickets[i]['nombreEncargado'];
        cTelefono.innerHTML = listaTickets[i]['telefono'];
        cDescripcion.innerHTML = listaTickets[i]['descripcion'];
    }

};

function obtenerEst(){
    let listaEstudiantes = obtenerListaEstudiantes();
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

function obtenerProy(){
    let listaProyectos = obtenerListaProyectos();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead = thead.insertRow();

    let nombre= filaHead.insertCell();
    let numeroCedula= filaHead.insertCell();
    let telefonos= filaHead.insertCell();
    let email= filaHead.insertCell();
    let empresa= filaHead.insertCell();
    let fechaCreacion= filaHead.insertCell();
    let fechaFin= filaHead.insertCell();
    let ubicacion= filaHead.insertCell();
    let descripcion= filaHead.insertCell();

    nombre.innerHTML = "nombre";
    numeroCedula.innerHTML = "numeroCedula";
    telefonos.innerHTML = "telefonos";
    email.innerHTML = "email";
    empresa.innerHTML = "empresa";
    fechaCreacion.innerHTML = "fechaCreacion";
    fechaFin.innerHTML = "fechaFin";
    ubicacion.innerHTML = "ubicacion";
    descripcion.innerHTML = "descripcion";

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cNumeroCedula = fila.insertCell();
        let cTelefonos = fila.insertCell();
        let cEmail = fila.insertCell();
        let cEmpresa = fila.insertCell();
        let cFechaCreacion = fila.insertCell();
        let cFechaFin = fila.insertCell();
        let cUbicacion = fila.insertCell();
        let cDescripcion = fila.insertCell();
      
        cNombre.innerHTML = listaProyectos[i]['nombre'];
        cNumeroCedula.innerHTML = listaProyectos[i]['numeroCedula'];
        cTelefonos.innerHTML = listaProyectos[i]['telefonos'];
        cEmail.innerHTML = listaProyectos[i]['email'];
        cEmpresa.innerHTML = listaProyectos[i]['empresa'];
        cFechaCreacion.innerHTML = listaProyectos[i]['fechaCreacion'];
        cFechaFin.innerHTML = listaProyectos[i]['fechaFin'];
        cUbicacion.innerHTML = listaProyectos[i]['ubicacion'];
        cDescripcion.innerHTML = listaProyectos[i]['descripcion'];
    }

};

function obtenerTick(){
    let listaTickets = obtenerListaTickets();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead = thead.insertRow();
    let nombreTicket = filaHead.insertCell();
    let nombreProyecto = filaHead.insertCell();
    let nombreEncargado = filaHead.insertCell();
    let telefono = filaHead.insertCell();
    let descripcion = filaHead.insertCell();

    nombreTicket.innerHTML = "nombreTicket";
    nombreProyecto.innerHTML = "nombreProyecto";
    nombreEncargado.innerHTML = "nombreEncargado";
    telefono.innerHTML = "telefono";
    descripcion.innerHTML = "descripcion";

    for(let i = 0; i < listaTickets.length; i++){
        let fila = tbody.insertRow();

        let cNombreTicket = fila.insertCell();
        let cNombreProyecto = fila.insertCell();
        let cNombreEncargado = fila.insertCell();
        let cTelefono = fila.insertCell();
        let cDescripcion = fila.insertCell();
        cNombreTicket.innerHTML = listaTickets[i]['nombreTicket'];
        cNombreProyecto.innerHTML = listaTickets[i]['nombreProyecto'];
        cNombreEncargado.innerHTML = listaTickets[i]['nombreEncargado'];
        cTelefono.innerHTML = listaTickets[i]['telefono'];
        cDescripcion.innerHTML = listaTickets[i]['descripcion'];
    }

};