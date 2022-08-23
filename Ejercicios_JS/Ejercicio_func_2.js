// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.

let texto = prompt("Ingrese un texto")

function ValidaMayMin (texto) {
    if (texto === texto.toUpperCase()) {
        return texto + (" Tiene solo Mayuscula")
    } else if (texto === texto.toLowerCase()) {
         return texto + (" Tiene solo Minuscula")
    } else {
        return texto + (" Tiene Mayuscula  y Minuscula")
    }
}
document.write(ValidaMayMin(texto))