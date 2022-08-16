/*  
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

let nota = Math.round(parseInt(prompt("Ingrese una nota de 0 a 10")))
if (nota > 0 && nota <=2) {
    document.write("Su Nota es Muy Deficiente ya que es" + " " + nota )
 }

 if (nota > 3 && nota <=4) {
    document.write("Su Nota es Insuficiente ya que es" + " " + nota )
 }

 if (nota > 4 && nota <=6) {
    document.write("Su Nota es Suficiente ya que es" + " " + nota )
 }

 if (nota == 7 ) {
    document.write("Su Nota es Bien ya que es" + " " + nota )
 }

 if (nota > 7 && nota <=9) {
    document.write("Su Nota es Notable ya que es" + " " + nota )
 }

 if (nota == 10) {
    document.write("Su Nota es Sobresaliente ya que es" + " " + nota )
 }

 if (nota >= 11) {
    document.write("Nota erronea, Ingrese una Nota del 0 a 10" )
 }