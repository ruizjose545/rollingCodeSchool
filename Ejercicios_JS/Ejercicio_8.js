/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/



let num = parseInt(prompt("Ingrese un numero del 1 al 50")) 
if (isNaN(num)) {
    document.write("El valor ingresado no es un numero")
} else if (num < 1 || num > 50) {
    document.write("el numero no esta en el rango, ingrese nuevamente un numero del 1 al 50")

} else {
    for(let i=1; i<=num; i++){
        for(let j=1; j<=num; j++){
            if(j<=i) document.write(i)
        }
        document.write('<br>')
    }   
        
}
    