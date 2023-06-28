// Dado el arreglo [3, 50, 70, 600, 40]:
// 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
// let arreglo=[3,50,70,600,40];
// arreglo.forEach(reco => {
//     console.log(reco);
// });

// 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
// let arreglo=[3,50,70,600,40];
// let multi=0
// arreglo.forEach(reco => {
//    reco=(reco*3)
//     console.log(reco);
// });

// 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
// let arreglo=[3,50,70,600,40];
// let con=0;
// while (con<arreglo.length) {
//     console.log(arreglo[con]);
//     con++
// }

// 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares
// let arreglo=[3,50,70,600,40];
// for (let i = 0; i < arreglo.length; i++) {
//     if (!(arreglo[i] % 2 !=0)) {
//         console.log(arreglo[i]);
//     }
// }

// 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
// mostrar si el nombre Juan se encuentra dentro del arreglo
// let arreglo=["Maria", "Pedro", "Juan" ,"Pablo", "Diana"];
// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i]=="Juan") {
//     console.log("si");
//  break; /Salir del bucle después de encontrar "Juan"
//     }
// }       /el (break; ) se puede utiliza para que pare cuando encuentre el nombre juan 

// 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
// y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
// en el arreglo) para mostrar cuántas veces aparece el nombre Maria
// let arreg=["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
// let con=0;
// for (let i = 0; i < arreg.length; i++) {
//     if (arreg[i]=="Maria") {
//        con++ 
//     }}
// console.log(con);

// 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
// sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
// se implementa la variable contadora
// let arreglo=[15, 7, 9, 12, 1];
// let con=0
// arreglo.forEach(arr => {
//     con+=arr
// });
// console.log(con);

// 8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
// los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
// arreglos para ver cómo se implementa la variable contadora
// let arreglo = [-2, 8, 99, 1, 7]
// let con=0
// arreglo.forEach(arr => {
//     con+= arr**2
// });
// console.log(con);

// 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
// contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
// Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
// la variable contadora.
// let arreglo= [true, true, false, true, false, false]
// let conw=0
// let cont=0
// while (conw<arreglo.length) {
//     if (arreglo[conw]==false) {
//       cont++ 
//     }
//     conw++ 
// }
// console.log(cont);

// 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
// inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
// palabra adso.
// let arreglo=["z", "p", "s", "z", "o", "b", "a", "w", "d"];
// let acomu="";
// for (let i = 0; i < arreglo.length; i++) {
//   if (arreglo[i]=="a" || arreglo[i]=="d" || arreglo[i]=="s" || arreglo[i]=="o") {
//        acomu+=arreglo[i];
//   }if (acomu.includes("a") && acomu.includes("d") && acomu.includes("s") && acomu.includes("o")) {
//       console.log("si es posible");
//   }
// }  

// 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla 
//del 5 del 10 al 20 , p.e (5x10, 5x11...)
// let arreglo=[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < arreglo.length; i++) {
//     console.log( 5 + "x" + arreglo[i] + "=" + arreglo[i]* 5);
// }

// 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar
// cuales numeros con consecutivos con otros, p.e. dos a y b son
// consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos
// porque 20 + 1 = 21.
// let arreglo=[5, 7, 90, 2, 5, 3, 8, 99]
// let acomulador=[]
// arreglo.forEach((numeroA) => {
//     arreglo.forEach((numeroB) => {
//         if (numeroA + 1 === numeroB) {
//             acomulador+=([numeroA, numeroB]);   
//         }        
//     });
// });
// console.log(acomulador);

// let arreglo=[5, 7, 90, 2, 5, 3, 8, 99]
// let acomulador=[]
// arreglo.forEach((numeroA) => {
//     arreglo.forEach((numeroB) => {
//         if (numeroA + 1 === numeroB) {
//             acomulador.push([numeroA, numeroB]);   
//         }        
//     });
// });
// console.log(acomulador);