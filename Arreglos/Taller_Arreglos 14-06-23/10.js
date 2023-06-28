// 10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.

function nombresIng() {
    let nombre=prompt("Ingrese un arreglo de nombres de personas");
    let arreglo=nombre.split(","); //split es para dividir separlos por , y map para convertir cada elemento del arreglo de cadena a numero.
    let conC=0

    for (let ind = 0; ind < arreglo.length; ind++) {
        let nom = arreglo[ind];
        
        for (let inde = 0; inde < nom.length; inde++) {
            if (nom[inde].includes("c")) {
                conC++
            }
        }
    }
    console.log("La letra C se encuentra " + conC + " veces en total de los nombres ingresados");
}
nombresIng()