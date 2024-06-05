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
// console.log(texto[0].textContent)//muestra el texto del elemento


//modificando texto desde js
texto[1].innerHTML="Modficando texto desde js";

//puedo crear una etiqueta, se agrega adentro del p como si fuese un div
texto[1].innerHTML="<h2>Modficando texto desde js</h2>";


//iterando y modificando los elementos de la coleccion

for(let x=0;x<texto.length;x++){
    texto[x].innerHTML=`llorando parte ${x}`
}



//CONTAR TITULOS

let ContarTitulos= function(){
    //cuenta los elementos
    let titulos=document.getElementsByTagName('li')
    console.log('cantidad de titulos: ', titulos.length)//si no lleva el .length, muestra las propiedades
}