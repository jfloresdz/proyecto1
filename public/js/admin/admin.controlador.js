'use strict';

Comprobar();

function Comprobar() {
    let baseUrl = window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
    let tipo =sessionStorage.getItem("tipo");

    if(tipo!=0){
        window.location.assign(baseUrl+'/public/logIn.html');
    }
}