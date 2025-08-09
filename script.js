console.log("**** FACTURA ELECTRICIDAD ****");
//FUNCIÓN DECLARATIVA (CONSUMO MENSUAL DE ENERGÍA)


function consumoMensualKilovatios (){
    let cantidadKilovatios=prompt("¿Cuántos kilovatios se consumieron en el mes?")
    const mes=prompt("¿Cuántos días tiene el mes?");
    return cantidadKilovatios*mes; 
}

let consumoMensual=consumoMensualKilovatios ();
