// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudad = []
 while (confirm("Desea Ingresar una Ciudad?")){
    let nom_ciudad= prompt("Ingrese el nombre la Ciudad: ")
    ciudad.push(nom_ciudad)
 }
    document.write(ciudad + "</br>")
    document.write(`La longitud maxima del Array es:  ${ciudad.length} <br> `)
    document.write(`La primera ciudad  es:  ${ciudad[0]} <br> `)
    document.write(`La tercer ciudad  es:  ${ciudad[2]} <br> `)
    document.write(`La Ultima ciudad  es:  ${ciudad[ciudad.length-1]} <br> `)
    ciudad.push('Paris')
    document.write(`La Ultima ciudad  ahora es:  ${ciudad[ciudad.length-1]} <br> `)
    document.write(`La segunda ciudad  es:  ${ciudad[1]} <br> `)
    ciudad[1]='Barcelona'
    document.write(`La segunda ciudad ahora es:  ${ciudad[1]} <br> `)
    document.write(ciudad + "</br>")
