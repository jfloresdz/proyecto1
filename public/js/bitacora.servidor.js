'use strict'
let lista_bitacora = [];

function registrar_bitacora(psEscogerProyecto, pnHorasLaboradas, psObservaciones, pnTotalHoras){
    let nuevaBitacora = [];

    nuevaBitacora.push(psEscogerProyecto, pnHorasLaboradas, psObservaciones, pnTotalHoras)

    lista_bitacora.push(nuevaBitacora);
    
};

function obtener_lista_bitacora(){
    return lista_bitacora;
};



