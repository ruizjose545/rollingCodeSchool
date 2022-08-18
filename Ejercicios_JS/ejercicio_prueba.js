//Ingresar un numero o una frase y guardarlos en un array

let numero = prompt("Ingrese un numero o frase")
let array = []
let letra 

for (let i = 0; i < numero.length; i++) {
    letra = numero.charAt(i)
    array.push(letra)
}
document.write(array)
