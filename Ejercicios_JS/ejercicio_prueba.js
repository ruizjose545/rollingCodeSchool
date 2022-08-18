//Ingresar un numero o una frase y guardarlos en un array
/*
let numero = prompt("Ingrese un numero o frase")
let array = []
let letra 

for (let i = 0; i < numero.length; i++) {
    letra = numero.charAt(i)
    array.push(letra)
}
document.write(array)

*/

//Ejercio para sacar los repetidos en un array

let arr = [ 1,2,2,2,2,3,3,4,5,5,5,6,7,8,9 ]

function formatArray(array) {
    let result = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
       if ( result.length === 0) {
        result.push(element)
       } 
        else if ( arr[index] !== result[index]) {
            result.push(element)
        } 
          

    }
    return result
}
document.write(formatArray(arr))