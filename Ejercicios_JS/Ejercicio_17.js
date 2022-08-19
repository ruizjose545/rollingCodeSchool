// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


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
