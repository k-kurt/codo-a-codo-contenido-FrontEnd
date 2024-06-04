// console.log("hola")

/* 
VAMOS A VER DOM
*/


//llamar a un elemento del hmtl a traves del name de la clase
//siempre va el document al principio en el manejo del DOM
let texto=document.getElementsByClassName('texto');

//al llamarlo se crea un array de html, muestra que hay tres elementos con la clase 'texto'
console.log(texto);


//puede contener varios tipos de elementos , en este caso el h1 junto con los p
// console.log(document.getElementsByClassName('texto1'));


//podemos traer un solo elemtno como en un array
// console.dir(texto[0])//muestra las propiedades
// console.log(texto[0].textContent)


//modificando texto desde js
texto[1].innerHTML="Modficando texto desde js";



