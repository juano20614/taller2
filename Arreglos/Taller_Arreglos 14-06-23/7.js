// 7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
// “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
// verduras) queden en el arreglo que les corresponde. Use ciclos.


let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
  let ele = arreglo1[i];

  if (ele === "Pera" || ele === "Limón") {
    frutas.push(ele);
  } else {
    verduras.push(ele);
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  let elemen = arreglo2[i];

  if (elemen === "Manzana" || elemen === "Banano") {
    frutas.push(elemen);
  } else {
    verduras.push(elemen);
  }
}

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);