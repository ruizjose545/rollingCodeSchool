// 1.- Escribe un programa de una sola línea que haga que apareció en la pantalla una alerta que diga “un mensaje”.
//alert("Un Mensaje")


// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

//document.writeln("Hola mundo")

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.


//document.write("la suma de 3 + 5 es: ", 3+5)


// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

/*let nom_usuario = prompt("Ingrese el Nombre de Usuario")
document.write("Hola  " + nom_usuario) */

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

/*let n1 = parseInt(prompt("Ingrese el Primer Numero"))
let n2 = parseInt(prompt("Ingrese el Segundo Numero"))
document.write("la suma es " +(n1 + n2) );*/


// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/*let n1 = parseInt(prompt("Ingrese el Primer número"))
let n2 = parseInt(prompt("Ingrese el Segundo número"))
if (n1 > n2) {
   document.write("El Numero Mayor es " + n1)    
} else {
       document.write("El Numero Mayor es " + n2)
}*/

    

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*let n1 = parseInt(prompt("Ingrese el Primer número"))
let n2 = parseInt(prompt("Ingrese el Segundo número"))
let n3 = parseInt(prompt("Ingrese el Tercer número"))

if (n1 > n2 && n1 >n3) {
    document.write("El Numero Mayor es " + n1)    
}
if (n1 < n2 && n2 > n3){
    document.write("El Numero Mayor es " + n2)
}
if (n1 < n2 && n2 < n3) {
    document.write("El Numero Mayor es " + n3)
}
if (n1 == n2 && n1 == n3 ) {
    document.write("Los Numeros Son Iguales")
}*/

 

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
/*let n = parseInt(prompt("Ingrese un Nro Entero"));
if (n % 2 == 0) {
    document.write("El Número ingresado es Divisible en 2");
}
else {
   document.write("El Número Ingresado NO es Divisible en 2");
} */


// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

/*let frase = prompt('Escriba una palabra o frase');

for (var i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u")
    document.write(frase[i]+ "<br>")
}/*




// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

 /*let dividendo = parseInt(prompt("Ingrese el Dividendo: "));    
 let divisor = parseInt(prompt("Ingrese el Divisor: 2, 3, 5 o 7: "));

if (dividendo == "0") {
     document.write("El Nro Ingresado es CERO")
 } else {
     switch (divisor) {
         case 0:
             document.write("El Divisor ingresado en CERO, lo cual es una indefinición")
             break;
         case 2:
             if (dividendo % 2 == 0) {
                 document.write("El Numero ingresado ES DIVISIBLE EN 2");
             } else {
                 document.write("El Numero ingresado NO ES DIVISIBLE EN 2");
             }
             break;
         case 3:
             if (dividendo % 3 == 0) {
                 document.write("El Numero ingresado ES DIVISIBLE EN 3");
             } else {
                 document.write("El Numero ingresado NO ES DIVISIBLE EN 3");
             }
             break;
         case 5:
             if (dividendo % 5 == 0) {
                 document.write("El Numero ingresado ES DIVISIBLE EN 5");
             } else {
                 document.write("El Numero ingresado NO ES DIVISIBLE EN 5");
             }
             break;
         case 7:
             if (dividendo % 7 == 0) {
                 document.write("El Numero ingresado ES DIVISIBLE EN 7");
             } else {
                 document.write("El Numero ingresado NO ES DIVISIBLE EN 7");
             }
             break;

         default:
             alert("DIVISOR NO ESTÁ EN LAS OPCIONES INDICADAS");
     }
 }*/


// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

 /*let dividendo = parseInt(prompt("Ingrese el Nro a Analizar: "));


 if (dividendo == "0") {
     document.write("EL NUMERO INGRESADO ES CERO '\n' ")

 } else {
     document.write("El Numero ingresado ES DIVISIBLE en: ");
     document.write("<br>");


     if (dividendo % 2 == 0) {
         document.write("2 <br>");
     }
     if (dividendo % 3 == 0) {
         document.write("3 <br>");
 }

     if (dividendo % 5 == 0) {
         document.write("5 <br>");
     }

     if (dividendo % 7 == 0) {
         document.write("7 <br>");
     }
 }*/

     
    
         
 
