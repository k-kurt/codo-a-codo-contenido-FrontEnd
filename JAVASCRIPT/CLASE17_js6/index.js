// console.log("hola")

/* 
VAMOS A VER DOM
*/


//llamar a un elemento del hmtl a traves del name de la clase
//siempre va el document al principio en el manejo del DOM
// let texto=document.getElementsByClassName('texto');

//al llamarlo se crea un array de html, muestra que hay tres elementos con la clase 'texto'
// console.log(texto);


//puede contener varios tipos de elementos , en este caso el h1 junto con los p
// console.log(document.getElementsByClassName('texto1'));


//podemos traer un solo elemtno como en un array
// console.dir(texto[0])//muestra las propiedades
// console.log(texto[0].textContent)//muestra el texto del elemento


//modificando texto desde js
// texto[1].innerHTML="Modficando texto desde js";

//puedo crear una etiqueta, se agrega adentro del p como si fuese un div
// texto[1].innerHTML="<h2>Modficando texto desde js</h2>";


//iterando y modificando los elementos de la coleccion

// for(let x=0;x<texto.length;x++){
//     texto[x].innerHTML=`llorando parte ${x}`
// }



//CONTAR TITULOS

/* let ContarTitulos= function(){
    //cuenta los elementos
    let titulos=document.getElementsByTagName('li')
    console.log('cantidad de titulos: ', titulos.length)//si no lleva el .length, muestra las propiedades

    if(titulos.length){
        let eleccion=parseInt(prompt('Elja un valor para seleccionar el titulo'))-1;
        console.log(titulos[eleccion].textContent)

    }

} */



//TRAER EL CONTENIDO DE LOS CAMPOS DEL FORMULARIO
//a los imput generalmente le podemos poner un name, y lo podemos traer desde el javascript

/* 
let MostrarValor= ()=>{
    //hay que agregar el 0 por que la funcion usada trae un array no te trae un solo elemento, y el value es traer el valor de ese elemento 0 
    let nombre=document.getElementsByName("usurname")[0].value;
    let email=document.getElementsByName("email")[0].value;
    console.log(nombre, email)
}  */




    //QUERY SELECTOR

    //con query selector podemos tomar todo el html, solo que hay que llamarlo como lo hariamos en css
    //por ejemplo la clase con el punto, el id con #
    //el promblema con query selector es que muestra solamente con lo primero que encutra, no crea un array o coleccion
    //si queremos agarrar un name tenemos que poner document.queryselector('name="texto"')
/* 
    let parrafo=document.querySelector('.text_parraf')
    console.log(parrafo.textContent) */

    //tenemos el queryselectorAll que este si crea un nodo o array con todos los elementos con esa clase
    /* let parrafo1=document.querySelectorAll('.text_parraf')
    console.log("mostrando parrafo1",parrafo1)
    for(let i=0;i<parrafo1.length;i++){
        console.log(parrafo1[i].textContent)
    } */

    //se puede seleccionar una etiqueta tambien
    // const divs=document.querySelectorAll("div")
    // console.log(divs);



    //CREAR ELEMENTOS
    /* 
    vamos a utilizar .createElement() y .appendchild()
    appendchild crea un elelemento y se lo agrega a un elemento padre
     */