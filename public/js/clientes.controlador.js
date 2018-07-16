'use strict'

imprimirListaClientes();
let botonRegistrarCliente = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosCliente);
Nom
Ced
Tel
Correo
Pais
Redes
Mapa

let inputNombreCliente = document.querySelector('#txtNom');
let inputNumCedulaCliente = document.querySelector('#txtCed');
let inputTelefonoCliente = document.querySelector('#txtTel');
let inputEmailCliente = document.querySelector('#txtCorreo');
let inputPais = document.querySelector('#txtPais');
let inputRedes = document.querySelector('#txtRedes');
let inputMapa = document.querySelector('#txtMapa');


function obtenerDatosCliente(){
    let infoCliente = [];
    let nNombreCliente = inputNombreCliente.value;
    let nNumCedulaCliente = inputNumCedulaCliente.value;
    let nTelefonoCliente = inputTelefonoCliente.value;
    let nEmailCliente = inputEmailCliente.value;
    let nPais = inputPais.value;
    let nRedes = inputRedes.value;
    let nMapa = inputMapa.value;
    
    infoProyecto.push(nNombreCliente,nNumCedulaCliente,nTelefonoCliente,nEmailCliente,nPais,nRedes,nMapa)
    
        registrarCliente(infoCliente);
    
        imprimirListaClientes();
        //limpiarFormulario();
    }


function imprimirListaClientes(){
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#tblProyectos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProyectos.length; i++){
        let fila = tbody.insertRow();
            let cNombreCliente = fila.insertCell();
            let cNumCedulaCliente = fila.insertCell();
            let cTelefonoCliente = fila.insertCell();
            let cEmailCliente = fila.insertCell();
            let cPais = fila.insertCell();
            let cRedes = fila.insertCell();
            let cMapa  = fila.insertCell();
          
            
    
            cNombreCliente.innerHTML = listaProyectos[i]['nombre'];
            cNumCedula.innerHTML = listaProyectos[i]['numeroCedula'];
            cTelefono.innerHTML = listaProyectos[i]['telefonos'];
            cEmail.innerHTML = listaProyectos[i]['email'];
            cEmpresa.innerHTML = listaProyectos[i]['empresa'];
            //cFechaCreacion = listaProyectos[i]['fechaCreacion'];
            //cFechaFin = listaProyectos[i]['fechaFin'];
            cUbicacion = listaProyectos[i]['ubicacion'];
            cDescripcion = listaProyectos[i]['descripcion'];
    }

};








    function limpiarFormulario(){
       inputNombreCliente.value = '';    
        inputNumCedulaCliente.value = '';
        inputTelefonoCliente.value ='';
        inputEmailCliente.value = '';
        inputPais.valu = '';
        inputRedes.value ='';
        inputMapa.value ='';
    
    }