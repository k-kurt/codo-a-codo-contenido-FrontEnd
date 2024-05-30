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

// console.log(frutas)

//agregar elemento al final del array
// frutas.push("uvas", "naranja")
// console.log(frutas)

// frutas.push("hola","mandando fruta", [1,2,3,4])
// console.log(frutas[6])

//acceder a los elementos de un array dentro de otro array, un array multidimensional
// console.log(frutas[6][1]);

//eliminar el ultimo elemento de un arry
// frutas.pop();
// console.log(frutas)

//eliminar el primer elemento del array
// console.log(frutas)
// frutas.shift("hola k ase", "sin fruta")
// console.log(frutas)



//agregar elementos al inicio del array

// console.log(frutas)
// frutas.unshift("hola k ase", "sin fruta")
// console.log(frutas)


//Concat, concatenar array
/* var animales=["perro","gato"]
console.log(frutas.concat(animales))
 */



//indexof - lastindexof, saber el posicionamiento de un elemento en el array

// var letras = ["A", "B", "C", "D", "E", "B", "C"]
//Buscamos de izquierda a derecha
// var posB1 = letras.indexOf("B")
// console.log("La primera 'B' tiene indice",posB1)
// var posB2 = letras.indexOf("B",2)
// console.log("La segunda 'B' tiene indice",posB2)
//Buscamos de derecha a izquierda
// var posA = letras.lastIndexOf("A")
// console.log("La última 'A' tiene indice",posA)
// var posB = letras.lastIndexOf("B")
// console.log("La última 'B' tiene indice",posB)




//slice 
//Devuelve los elementos seleccionados en un array como un array nuevo.
//corta el array en la posicion que le indicamos, si pasanis un valor,solo quitara ese valor del array, el valor que esta en ese indice que pasamos hacia la derecha

var letras = ["A", "B", "C", "D", "E", "B", "C"]

// console.log(letras.slice(1,3))

//es estricto en los extremos, no los cueb=nta

// console.log(letras.slice(2))



/* 
 Método
Descripción
 .splice()
Agrega o elimina elementos a un array. Regresa los elementos eliminados.
 .slice()
Devuelve los elementos seleccionados en un array como un array nuevo.
 .reverse()
Invierte el orden de elementos del array.
 .sort()
Ordena los elementos del array bajo un criterio de ordenación alfabética.
 .sort(func)
Ordena los elementos del array bajo un criterio de ordenación func.

*/



//SPILCE  array.splice(start, deleteCount, item1, item2,...)
//donde empieza, hasta donde reemplaza, si ponemos hasat 0, mueve de lugar, no reemplaza, pero si ponemos otro numero si borra
//EL PROFESOR NO  EXPLICA ESOOOOOOO

// letras.splice(2,0,'j')
// console.log(letras)

// letras.splice(2,2,'j')
// console.log(letras)




//FOR IN _ FOR OF
//el for in segun el profe funciona para contar los objetos y el for of es para los array
// Usa for...in cuando necesites iterar sobre las propiedades de un objeto.
// Usa for...of cuando necesites iterar sobre los valores de un iterable (como arrays o strings).


// let persona={
//     nombre: "ana",
//     apellido: "paz",
//     edad:25
// };

// let campos=0;

// for(let x in persona){
//     campos++
//     console.log(`el campo ${campos} es: ${x}`)
// }

//nos da los campos de este objeto

//ahora si quiero sacar la key y la value 

// for(let x in persona){
//     console.log(`${x}: ${persona[x]}`)
// }


//en objeto
// var letras = ["A", "B", "C", "D", "E", "B", "C"]

// for(let x of letras){
//     console.log(x)
// }






//LOCAL STORAGE & SECCIONSTORAGE
/* 
En localstorage al cerrar el navegador la informacion permanece en el dispositivo  y puede ser recuperada en una sesion posterior
En el SessionStorage al finalizar la sesion la informacio almacenada se elimina.
Los objetos LocalStorage y sessionStorage permiten guardar pares clave/valor desde el navegador web

*/


//El navegador soporta esta funcion?
// if(typeof (Storage) !=="undefined"){
//     //setItem guarda datos en el dispositivo
//     localStorage.setItem("apellido", "perez")
//     localStorage.setItem("nombre", "Juan")
//     console.log("Datos guardados.")
//     ape=localStorage.getItem("apellido")
//     nom=localStorage.getItem("nombre")
//     console.log(`${ape}, ${nom} `)


// }else{
//     console.log("web Storage no soportado.")
// }



//sessionStorage
// ¿El navegador soporta esta función?
// if (typeof(Storage) !== "undefined") {
//     // setItem guarda datos en el dispositivo
//     sessionStorage.setItem("curso", "Full Stack Python")
//     // getItem recupera datos del dispositivo
//     curso = sessionStorage.getItem("curso")
//     console.log("recuperado:" + curso)
//  } else {
//     console.log("Web Storage no soportado.")
//  }
 

//verificamos si el nombre ya esta almacenado en localStorage
// const nombreGuardado=localStorage.getItem('nombre');
// if(nombreGuardado){
//     console.log('nombre obtenido de localstorage: ', nombreGuardado, "apellido: ", localStorage.getItem('apellido'))

// }else{
//     //si no esta almacenado, solicitamos al usuario el nombre
//     let nombre=prompt("ingrese el nombre:");
//     if(nombre){
//         localStorage.setItem('nombre', nombre)
//         console.log("nombre guardado en localStorage:", nombre, "apellido: ", apellido);

//     }else{
//         console.log("no se ingreso ningun nombre")
//     }

// }


//verificamos si el apellido en el sessionstorage esta guardado

// const apellidoGuardado=sessionStorage.getItem('apellido');
// if(apellidoGuardado){
//     console.log("apellido obtenido de sessionStorage: ", apellidoGuardado)

// }else{
//     var apellidoEntrada=prompt("ingrese el apellido:")
//     if(apellidoEntrada){

//          sessionStorage.setItem('apellido', apellidoEntrada)
//          console.log("Apellido guardado: ", apellidoEntrada)
//     }else{
//         console.log("apellido no ingresado")
//     }
// } 





//JSON
//para comunicarse con el servidor, hay que hacerlo con JSON, al servidor va un JSON que recibe un objeto del navegador, el navegador recibe un JSON que convierte el JSON en objeto 
//el navegador recibe el JSON y hay que convertirlo en objeto 


//creamos un objeto 
var miObj={name: "kevin", edad: 27, ciudad: "puerto"}
console.log(miObj)

//hay que transformar el objeto en JSON para enviarlo al servidor
var myJSON=JSON.stringify(miObj)
console.log(myJSON)


//hay que transformarlo en OBJETO para recibirlo en JAVASCRIPT
var myObjectJSON=JSON.parse(myJSON);
console.log(myObjectJSON)