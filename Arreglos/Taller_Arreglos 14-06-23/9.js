// 9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
// promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.

function compararPromedios() {
    let arreglo1 = prompt("Ingrese el primer arreglo de números enteros separados por coma:");
    let numeros1 = arreglo1.split(",").map(Number);
  
    let arreglo2 = prompt("Ingrese el segundo arreglo de números enteros separados por coma:");
    let numeros2 = arreglo2.split(",").map(Number);
  
    let promedio1 = calcularPromedio(numeros1);
    let promedio2 = calcularPromedio(numeros2);
  
    if (promedio1 > promedio2) {
      console.log("El primer arreglo tiene un promedio mayor:", promedio1);
    } else if (promedio2 > promedio1) {
      console.log("El segundo arreglo tiene un promedio mayor:", promedio2);
    } else {
      console.log("Ambos arreglos tienen el mismo promedio:", promedio1);
    }
  }
    function calcularPromedio(arreglo) {
      let suma = 0;
      for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
      }
      return suma / arreglo.length;
    }
  
  compararPromedios();
