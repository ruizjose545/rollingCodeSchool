
// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
// para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado
//  de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let dado_1=[];
let dado_2=[];
let suma=0;

for (let i = 0; i <=3; i++) {
    dado_1.push(Math.floor(Math.random() * 6)+1)
    dado_2.push(Math.floor(Math.random() * 6)+1) 
    suma += dado_1[i] + dado_2[i] 

}
document.write(`valores del dado 1: ${dado_1}  <br> `) 
document.write(`valores del dado 2: ${dado_2}  <br> `)
document.write(`Suma de los dados es: ${suma} <br> `)
