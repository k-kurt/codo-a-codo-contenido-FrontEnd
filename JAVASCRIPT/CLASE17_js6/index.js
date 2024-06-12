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

    //vamos a llamar al elemento de html con la forma que mas se suele usar con el document.getElementById('container')


    /* let AgregarElementos=function(){

        let texto=prompt("escriba el texto a agregar");

        let parrafo=document.createElement('p');

        parrafo.textContent=texto;

        let contenedor=document.getElementById('creandoElementos');

        contenedor.appendChild(parrafo)

    } */




        //NODOS DE TEXTO

        //creamos un nodo de texto

        // const h1=document.createElement('h1')
        // const nodo=document.createTextNode('CREANDO Y CLONANDO NODOS DE TEXTO')
        // h1.appendChild(nodo)
        // document.body.appendChild(h1)


        
        //CLONANDO PARRAFO

        // let clonar=function(){

        //     var original=document.getElementById('original')

        //     var clon=original.cloneNode(true);

        //     //cambiar texto en el clon
        //     clon.querySelector('p').textContent="este es un parrafo clonado";

        //     //aniadir el clon al documento
        //     document.body.appendChild(clon)


        // }



        //AGREGAR IMAGEN DESDE EL JS
        
        //si ya tenemos una imagen agregada desde el html podemos traerlo, mediante id, clase, etc

        let contenedor=document.getElementById('contenedor_img')
        const img=document.createElement('img')

        img.src=("https://www.formulatv.com/images/series/posters/000/33/dest_1.jpg")
        img.alt="imagen de bart simpson"
        contenedor.appendChild(img)



        //MODIFICAR ATRIBUTOS DE UN ELEMENTO

        //el backgraoundcolor hay que hacerlo con camelcase si queremos hacerlo desde js

        let p=document.getElementById('p1');

        p.innerHTML="Codo a codo"
        p.className="dato"//agrega una clase
        p.style.color="red"


        
        
        
        //LAS 3 FORMAS DEL EVENTO CLIC

        //EVENTO PARA CAMBIAR TEXTO
        //en este es necesario llamar a la funcion en la declaracion del boton en html
        let cambiarTexto=()=>{
            let parrafo=document.getElementById("parrafo")
            let textodinam=prompt("ingrese el texto")
            parrafo.innerHTML=textodinam
        }



        //en esta forma deramos el evento onclic en js y podriamos declarar un id en el boton ya que puede haber muchos
        
        // let boton=document.querySelector('button')
        // boton.onclick=function(){
        //     let parrafo=document.getElementById("parrafo")
        //     let textodinam=prompt("ingrese el texto")
        //     parrafo.innerHTML=textodinam
        // }
        



        //en esta forma usamos la funcion de addeventListener, primero indicmos que se ejecute cuando haya cargado todo el DOM y le pasamos la funcion y a la vez declaramos la funcion donde otra vez una vez cargado el dom ejecuta la funcion de cambiar texto, como el addEventListener recibe 2 parametros, pasamos la funcion que ya teniamos de cambiarTexto
        //el addEventListener recibe 2 parametros, el primero es el evento y el segundo es una funcion 

        document.addEventListener("DOMContentLoaded", function(){
            let botonCambiar=document.querySelector("boton");
            botonCambiar.addEventListener("click", cambiarTexto);
        });

        //es una convencion, podria funcionar igual de la siguiente manera
        // let botonCambiar=document.querySelector("boton");
        //     botonCambiar.addEventListener("click", cambiarTexto);