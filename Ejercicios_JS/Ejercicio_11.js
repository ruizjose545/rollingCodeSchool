// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nom1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));

let nom2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));

let nom3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese su edad"));
 
let mayor = Math.max(edad1,edad2,edad3);

if (isNaN (edad1) && isNaN (edad2) && isNaN (edad3)) {
    document.write("Las Edades deben ser numericas")
    
} else if (edad1 === edad2 || edad1 === edad3 ) {
    document.write(`<h1> Las tres personas tienen la misma edad  (${mayor}) años </h1> `)
    
} else if (edad1 === mayor) {
    document.write(`<h1>  ${nom1} [${edad1}] es mayor que ${nom2} [${edad2}] y ${nom3} [${edad3}] </h1>`)
} else if (edad2 === mayor) {
    document.write(`<h1>  ${nom2} [${edad2}] es mayor que ${nom1} [${edad1}] y ${nom3} [${edad3}] </h1>`)
} else if (edad3 === mayor) {
    document.write(`<h1>  ${nom3} [${edad3}] es mayor que ${nom1} [${edad1}] y ${nom2} [${edad2}] </h1>`)
} 