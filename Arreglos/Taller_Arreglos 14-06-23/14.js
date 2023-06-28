// 14. Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
// Se le debe pedir al usuario que introduzca el arreglo.

function recibLetras() {
    let letr = prompt("ingrese un arreglo de letras no repetidas").split(",") //split es para dividir separlos por , y map para convertir cada elemento del arreglo de cadena a numero.
    let ordenLetra = letr.sort();
    console.log(ordenLetra);   
}
recibLetras()