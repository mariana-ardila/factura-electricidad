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

//FUNCIÓN FLECHA SUBTOTAL MULTIPLICADO CONSUMO POR TARIFA
let subtotalFactura=()=>{
    return consumoMensual*valorKilovatio;
}

let facturaSubtotal=subtotalFactura();

//FUNCIÓN FLECHA VALOR DEL IVA APLICADO SOBRE EL SUBTOTAL
let ivaAplicadoAlSubtotal=()=>{
    return facturaSubtotal*valorIva;
}

let ivaDelSubtotal=ivaAplicadoAlSubtotal();


//FUNCIÓN FLECHA PARA HALLAR EL TOTAL A PAGAR

let totalFactura=()=>{
    return facturaSubtotal+ivaDelSubtotal+valorFijoxServicio;
}

let totalaPagar=totalFactura();

//FUNCIÓN FINAL
let descripcionTotalApagar=()=>{

return console.log(`La factura de electricidad se compone de:\n
    Consumo mensual: ${consumoMensual} kilovatios \n
    Tarifa del kilovatio: ${valorKilovatio}\n
    Subtotal: ${facturaSubtotal} pesos \n
    Valor del Iva: ${ivaDelSubtotal} pesos \n
    Valor del cargo fijo: ${valorFijoxServicio} pesos \n
    Total a pagar: ${totalaPagar} pesos `)  

}
//LLAMAR LA FUNCIÓN PARA MOSTRAR LOS VALORES EN CONSOLA
descripcionTotalApagar();



