// 6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
// “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
// queden en el arreglo que les corresponde. Use ciclos.

let arreglo1 = ["Cali" , "Tulua", "Cartago", "Salento"] 
let arreglo2 = ["Cordoba", "Armenia", "Palmira", "Circasia"]

 let valle=[]
 let quindio=[]

 for (let index = 0; index < arreglo1.length; index++) {
     let ele = arreglo1[index];

     if (ele=="Salento") {
         quindio.push(ele)
     }else{
         valle.push(ele)
     }
 }

 for (let inde = 0; inde < arreglo2.length; inde++) {
     let elem = arreglo2[inde];
     if (elem=="Palmira") {
         valle.push(elem)     
     } else {
         quindio.push(elem)     }
     
 }
console.log("Quindio",quindio);
console.log("Valle",valle);














// let valle = ["VCali" , "VTulua", "VCartago", "QSalento"] 

// let quindio = ["QCordoba", "QArmenia", "VPalmira", "QCircasia"]

//  let datoAMover="QSalento"
//   let indexs=valle.indexOf(datoAMover)
//  if (indexs !== -1) {
//      let datoAMovido=valle.splice(indexs,1)[0]
//      quindio.push(datoAMovido)
    
//  }

// let datoAMo="VPalmira"
// let indes=quindio.indexOf(datoAMo)
// if (indes!== -1) {
//     let datoMov=quindio.splice(indes,1)[0]
//     valle.push(datoMov)
    
// }

// console.log(valle);
// console.log(quindio);