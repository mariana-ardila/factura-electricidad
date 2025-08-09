console.log("**** FACTURA ELECTRICIDAD ****");
//FUNCIÓN DECLARATIVA (CONSUMO MENSUAL DE ENERGÍA)


function consumoMensualKilovatios (){
    let cantidadKilovatios=prompt("¿Cuántos kilovatios se consumieron en el mes?")
    const mes=prompt("¿Cuántos días tiene el mes?");
    return cantidadKilovatios*mes; 
}

let consumoMensual=consumoMensualKilovatios ();

//FUNCIÓN DECLARATIVA TARIFA BASE POR KILOVATIO
function tarifaKilovatio(){
    return parseFloat(prompt("Digite el valor del Kilovatio"));
}

let valorKilovatio= tarifaKilovatio();

//FUNCIÓN DE EXPRESIÓN CARGO FIJO POR SEVICIO
let cargoFijoXservicio=function(){
    return parseFloat(prompt("Digite el valor del cargo fijo por servicio: "));
}

let valorFijoxServicio=cargoFijoXservicio();


//FUNCIÓN DE EXPRESIÓN IVA
let iva=function(){
    return parseFloat(prompt("Digite el valor del IVA: "))/100;
}

let valorIva=iva();



