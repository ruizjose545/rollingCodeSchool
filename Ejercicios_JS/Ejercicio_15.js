// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto=prompt("Ingrese un texto");
let cant=0;

for (let i = 0; i < texto.length; i++) {
    if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u"){
        cant = cant + 1
    }  
  
}
document.write("<br>La cantidad de vocales es: "+cant);