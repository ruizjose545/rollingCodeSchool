/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/


let suma = 0;
while (confirm("Quiere ingresar un numero?")) {
    let num = parseInt(prompt("Ingrese una numero")) ;
    if (isNaN(num)) {
        alert("EL valor ingresado debe ser un numero, vuelva a intentar");
    } else {
        suma = suma + num;
        
    }
  }
  document.write("<h2> El resultado es: " + suma + "</h2>");


