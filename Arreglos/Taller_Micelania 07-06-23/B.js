// 1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length
 let a=[1,2,3,4,5,6,7,8,9,10] ;
 console.log(a.length);
 let b =[];
 console.log(b.length); 
 let c= ["a", true, -1];
 console.log(c.length);
 let d=[2, 4, 5, 7, 1, 34, 89, 0];
 console.log(d.length);

// 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
let arreglo =[1,2,3,4,5,6,7,8,9,10];
// a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b)
// arreglo.push(345);
// b) Agregue el elemento true usando push y verifique el cambio en el arreglo
// arreglo.push(true);
// c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo
// arreglo.push("ADSO");
// d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
// arreglo.push(455, 78, false);
// e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo
// arreglo.push("ABcd", true, 21);
// console.log(arreglo);

// 3. Use splice para hacer las eliminaciones correspondientes:
// a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
// let a=[1, 2, false];
// a.splice(2,1)
// console.log(a);
// b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
// let b=[99, false, 17, 45, 7, "abc", 78];
// b.splice(6,1)
// console.log(b);
// c) Dado el arreglo [-1, -55, -89, -30, 1000] Elimine el elemento de índice 1
// let c = [-1, -55, -89, -30, 1000];
// c.splice(1,1)
// console.log(c);
// d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
// índice 4 en un sólo llamado
// let b=["zxc", 767, 1298, true, false, [3], 1];
// b.splice(1,4)
// console.log(b);
// e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado
// let e =[34, ["q"], 67, 1, 99, 1/2];
// e.splice(3,4)
// console.log(e);

// 4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
// let a=[2,6,9,0,5];
// let copia=a;
// a.push(20)
// console.log(a);
// copia.push(30)
// console.log(copia);

// 5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.
// let arreglo=["abc", 4, 88, 99];
// let arregloInde=arreglo.slice();
// arregloInde.push(22);
// console.log(arregloInde);
// console.log(arreglo);

// 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo
// e imprimir todos sus elementos
// let arreglo=["x", "y", "z", 0, 1, 2, 3];
//    for (let i = 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]);
// }

// 7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e
// imprimir todos sus elementos aumentados en 1
// let arreglo=[1, 17, 8, 9, 3]
// let aumento=0
// for (let i = 0; i < arreglo.length; i++) {
//     aumento=arreglo[i]+1
//     console.log(aumento);
// }

// 8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
// function recibirA() {
//     console.log(arreglo.length)
// }
// recibirA(arreglo=[1, 2, 3, 4, 5 ]);

// 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
// elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en 
//la solución de este problema
// function reci(arreglo) {
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i]==="a" || arreglo[i]==="b"|| arreglo[i]==="c"|| arreglo[i]==="d"|| arreglo[i]==="e"|| arreglo[i]==="f"|| arreglo[i]==="g") {
//           return "si";
//         }
//     }
//           return "no";  
//   }

// let letra=reci(["g"])
// console.log(letra);