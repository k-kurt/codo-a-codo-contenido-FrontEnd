
// function saludar(){
//     console.log("hola, esta es mi primera funcion")
// }

// saludar()


// function tablaDelCinco(){
//     for (let i = 0; i <=50; i+=5) {
//         console.log(i)
// }}

// function tablaDelCinco2(){
//     for (let i = 1; i <=10; i++) {
//         console.log(i+"*"+"5="+i*5)
// }}

// function tablaDelCinco(){
// for (i = 1; i <= 10; i++) {console.log("5 x", i, "=", 5 * i)}
// }

// function tablaDelCinco(){
// for (i = 1; i <= 10; i++) {console.log("5 x", i, "=", 5 * i)}
// }

// for (let i = 0; i < 3; i++) {

//     tablaDelCinco()
// }

// tablaDelCinco()
// tablaDelCinco2()


//FUNCION CON PARAMETRO

// let nombre= prompt("Ingrese su nombre")

// function FunctConParamet(nombre){
//     console.log("hola "+ nombre)
// }

// FunctConParamet(prompt("ingrese su nombre"))

// FunctConParamet("luis")


//RETURN 

// function multiplicar(a,b=3){
//     return a*b;
// }

// let resultado=multiplicar(5);

// console.log(resultado);

// console.log(multiplicar(5,2))//salida 10
// console.log(multiplicar(5))//salida 15



//FUNCION FLECHA

// let saludar=()=>{
//     console.log("hola");
// }
// si no hay cuerpo no hace falta las llaves
// si hay un solo parametro puede ir sin parentesis
// saludar()


// let duplicar=(numero)=>{
//     return numero*2
// }

// let resultado=duplicar(5)

// console.log(resultado)


//FUNCION ANONIMA
//se ejecuta de manera local sin ser llamada


// let saludo=function(nombre){
//     var mensaje="saludo "+nombre;
//     return mensaje;
// }

// console.log(saludo("kevin"))


// setTimeout(function() {
//     console.log("Han pasado 3 segundos");
// }, 3000);


// setTimeout(() => {
//     console.log("Han pasado 3 segundos");
// }, 3000);



//COLLBACK

//en lugar de declarar la funcion que vamos a usar, en el parametro de la primera funcion
//vamos a declarar que sera una funcion en el cuerpo de la primera funcion

// function primeraFuncion(mensaje, collback){
//     console.log(mensaje);
//     collback();
// }

// function collback(){
//     console.log("el collback")
// }


// primeraFuncion("hola, solo soy el mensaje", collback);



// function primera(numero, funcionCollback){
//     let resultado=numero*5;
//     funcionCollback(resultado);
// }


// function funcionCollbackMostrarResultado(resultado){
//     console.log("el resultado es: "+resultado);
// }


// primera(5,funcionCollbackMostrarResultado);



//CLOUSURE 

//se crea una variable dentro de una funcion que se usa adentro de una funcion que esta adentro de esa primera funcion

function primera(){
    var variable="hola";
    function segunda(){
        alert(variable);
    }

    segunda();

}

primera();

//no puedo usar por fuera esa variable, fuera de esas funciones