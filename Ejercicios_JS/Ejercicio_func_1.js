// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

let num = parseInt(prompt("ingrese un numero"))

function par_impar(num) {
    if (num % 2 == 0) {
        return ('Su numero es \"PAR"')
  
    }else {        
 
     return ('Su numero es \"IMPAR"')
  }
}
document.write(par_impar(num))
