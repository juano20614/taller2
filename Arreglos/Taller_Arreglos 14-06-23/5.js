// 5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
// nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
// edad.

function edades() {
  let edades=parseInt(prompt("Ingrese el numero de ususarios de los que quire saber si son mayores de edad"))
  let edadMayores=[]
  let edadMenores=[]
  
  for (let i = 0; i < edades; i++) {
    let nombre = prompt(`Ingrese el nombre del ususario ${i + 1}:`)
    let edad = prompt(`Ingrese la edad del ususario ${i + 1}:`)
    
  if (edad >= 18) {
    edadMayores.push(nombre)
  }if (edad <= 18) {
    edadMenores.push(nombre) 
  }
}
  console.log("La cantidad de ususarios mayores de edad son:" + edadMayores.length);
  console.log("Usuarios mayores de edad:" + edadMayores);
  console.log("La cantidad de ususarios menores de edad son:" + edadMenores.length);
  console.log("Usuarios menores de edad:" + edadMenores);
}
edades()