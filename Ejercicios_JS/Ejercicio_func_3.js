// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// let base = parseInt(prompt("Ingrese el valor de la base del rectangulo:"))
// let altura = parseInt(prompt("Ingrese la altura del rectangulo:"))

// function perimetro_rectangulo(base,altura) {
//     let perimetro = 2*(base+altura)
//     document.write(`el perimetro del rectangulo es = `);
//     document.write("<br>");
//     return(perimetro)    

// }

// document.write(perimetro_rectangulo(base,altura))

let cantidad = prompt("Ingrese el valor de la base del rectangulo:")
let tasa = parseFloat(prompt("Ingrese la altura del rectangulo:"))

function convert(cantidad,tasa) {
    let resultado = cantidad*tasa 
    document.write(`la moneda convertida es = `);
    document.write("<br>");
    return(resultado)    

}

document.write(convert(cantidad,tasa))
