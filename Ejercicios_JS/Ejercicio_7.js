/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/


let num = parseInt(prompt("Ingrese un numero del 1 al 50")) 
if (isNaN(num)) {
    document.write("El valor ingresado no es un numero")
} else if (num < 1 || num > 50) {
    document.write("el numero no esta en el rango, ingrese nuevamente un numero del 1 al 50")

} else {
    for(let i=num; i>=1; i--){
        for(let j=num; j>=1; j--){
            if(j<=i) document.write(i)
        }
        document.write('<br>')
    }   
        
}
    

     



