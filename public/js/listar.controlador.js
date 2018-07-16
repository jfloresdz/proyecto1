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
    let listaProfesores = obtenerListaProfesores();
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
    let contrasenna=filaHead.insertCell();

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
    contrasenna.innerHTML = "contrasenna";
   

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

function obtenerBit(){
    let listaBitacoras = obtenerListaBitacoras();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    let filaHead = thead.insertRow();
    let EscogerProyecto= filaHead.insertCell();
    let HorasLaboradas= filaHead.insertCell();
    let Observaciones= filaHead.insertCell();
    let TotalHoras= filaHead.insertCell();

    EscogerProyecto.innerHTML = "EscogerProyecto";
    HorasLaboradas.innerHTML = "HorasLaboradas";
    Observaciones.innerHTML = "Observaciones";
    TotalHoras.innerHTML = "TotalHoras";


    for(let i = 0; i < listaBitacoras.length; i++){
        let fila = tbody.insertRow();

        let cEscogerProyecto = fila.insertCell();
        let cHorasLaboradas= fila.insertCell();
        let cObservaciones= fila.insertCell();
        let cTotalHoras= fila.insertCell();

        cEscogerProyecto.innerHTML = listaBitacoras[i]['EscogerProyecto'];
        cHorasLaboradas.innerHTML = listaBitacoras[i]['HorasLaboradas'];
        cObservaciones.innerHTML = listaBitacoras[i]['Observaciones'];
        cTotalHoras.innerHTML = listaBitacoras[i]['TotalHoras'];

    }

};

function obtenerCli(){
    let listaClientes = obtenerListaClientes();
    let thead = document.querySelector('#tblLista thead');
    let tbody = document.querySelector('#tblLista tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';
    let filaHead = thead.insertRow();

    let nombre = filaHead.insertCell();
    let cedula = filaHead.insertCell();
    let telefono = filaHead.insertCell();
    let correo = filaHead.insertCell();
    let pais = filaHead.insertCell();
    let redes = filaHead.insertCell();

    nombre.innerHTML = "nombre"; 
    cedula.innerHTML = "cedula"; 
    telefono.innerHTML = "telefono"; 
    correo.innerHTML = "correo"; 
    pais.innerHTML = "pais"; 
    redes.innerHTML = "redes"; 


    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();
       
        let cnombre = fila.insertCell();
        let ccedula= fila.insertCell();
        let ctelefono= fila.insertCell();
        let ccorreo= fila.insertCell();
        let cpais= fila.insertCell();

        cnombre.innerHTML = listaClientes[i]['nombre'];
        ccedula.innerHTML = listaClientes[i]['cedula'];
        ctelefono.innerHTML = listaClientes[i]['telefono'];
        ccorreo.innerHTML = listaClientes[i]['correo'];
        cpais.innerHTML = listaClientes[i]['pais']; 
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