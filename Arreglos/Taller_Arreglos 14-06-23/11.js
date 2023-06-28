// 11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
// impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.

function recibiNum() {
    let numero=prompt("ingrese un arreglo de números enteros positivos")
    let arreglo=numero.split(","); //split es para dividir separlos por , y map para convertir cada elemento del arreglo de cadena a numero.

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] % 2 !=0) {
            console.log(arreglo[index]);
        } 
    }   
}
recibiNum();