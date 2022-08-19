/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/

let n_fila = parseInt(prompt("Ingrese el número de Fila"));
let n_colu = parseInt(prompt("Ingrese el número de Columna"));
let tabla = (n_fila * n_colu);

if (isNaN (n_fila) || isNaN(n_colu)) {
    document.write("Las Filas y columnas deben ser valores numericos ")
} else  {
    for (let i = n_colu; i >=1; i--) {
        for(let j = n_fila;j >= 1; j--) {
            document.write(tabla +'\t' )
            tabla--
        }
        document.write('<br>')
    }

}