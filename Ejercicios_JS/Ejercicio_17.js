// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


/*ler frase = prompt("Ingrese un texto y te dire en que lugar esta la primera vocal").toLowerCase();
let vocal = ["a","e","i","o","u"]
let posicion = [];

for (let i = 0; i < frase;length i++) {
   if (vocal.includes(frase.charAt(i))) {
       posicion.push(i);
   }
   
   }    document.write("la primera position es:" + posicion[0]) */

let str=prompt("Ingrese un texto");
let i=0;
let posicion=0;

do{
    if(str.substr(posicion,1)=="a"||str.substr(posicion,1)=="e"||str.substr(posicion,1)=="i"||str.substr(posicion,1)=="o"||str.substr(posicion,1)=="u"){
        document.write("<br>La posicion de la primera vocal es: "+posicion);
        i++;
    }else{
        posicion++;
    }  
}while(i==0)
