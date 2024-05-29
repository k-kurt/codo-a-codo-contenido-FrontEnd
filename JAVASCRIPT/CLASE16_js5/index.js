// document.write("hoola")



//  ARRAYS

// let array=["a","b","c","d"];

// let mezcla=['hola',12,12.4,true]
// console.log(mezcla)

// console.log(mezcla[0])
// console.log(mezcla[2])

//el ultimo elemento del array

// console.log(array[array.length-1])


//CREACION MEDIANTE OBJETO ARRAY, DE LA FORMA TRADICIONAL

// const vectorDos=new Array("a","b","c")



//MUESTRA CON BUCLE

// console.log("conponenetes del array: ")
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
    
// }


//METODOS CON ARRAYS

var frutas=["banana","manzana"]

console.log(frutas)

//agregar elemento al final del array
frutas.push("uvas", "naranja")
console.log(frutas)

frutas.push("hola","mandando fruta", [1,2,3,4])
console.log(frutas[6])

//acceder a los elementos de un array dentro de otro array, un array multidimensional
console.log(frutas[6][1]);

//eliminar el ultimo elemento de un arry
frutas.pop();
console.log(frutas)