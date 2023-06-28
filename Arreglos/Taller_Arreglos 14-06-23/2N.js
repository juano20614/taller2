// 2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
// cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
// (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
// elementos del arreglo.

let cadena=cade(["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"])

function cade(arreglo) {
  let conA=0
  let conT=0
  let conG=0
  let conC=0

  for (let i = 0; i < arreglo.length; i++) {
    let cont=arreglo[i]
  for (let x = 0; x < cont.length; x++) {
    if (cont[x]==="A") {
      conA++
    }if (cont[x]==="T") {
      conT++
    }if (cont[x]==="G") {
      conG++
    }if (cont[x]==="C") {
      conC++
    }
  }
}
//repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.
if (conA>0) {
  console.log(`cadena formamada :${"A".repeat(conA)}`);
}if (conT>0) {
  console.log(`cadena formamada :${"T".repeat(conT)}`);
}if (conG>0) {
  console.log(`cadena formamada :${"G".repeat(conG)}`);
}if (conC>0) {
  console.log(`cadena formamada :${"C".repeat(conC)}`);
}
} 