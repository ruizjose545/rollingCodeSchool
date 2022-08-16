/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.*/


let Edad = parseInt(prompt("Ingrese su edad"))

if(Edad >= 18) {
    document.write("Ya puedes Conducir al tener "+ Edad +" años")}
else if(Edad < 18){document.write("NO Puedes conducir, ya que tienes "+ Edad + " años")}
else{alert("Por favor ingresa un numero")}
