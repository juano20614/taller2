// 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
// él.

function esPrimo(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
  
function numNatu(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      if (esPrimo(arreglo[i])) {
        console.log(arreglo[i]);
      }
    }
  }
numNatu([11, 19, 61, 1, 20, 50]);