// document.write("JS 2")



/**
 * 
El operador !== en JavaScript es un operador de comparación estricta de desigualdad. Este operador compara dos valores y devuelve true si los valores no son iguales o no son del mismo tipo. De lo contrario, devuelve false.
 */

var n1=parseInt(prompt("ingrese n1"))
var n2=parseInt(prompt("ingrese n2"))

if(n1!==n2){
    document.write("no son iguales o no son del mismo tipo")
}else(document.write("son iguales"))




/**
 * Operadores de asignación

 */

// Operador   
// =
// +=
// -=
// *=
// /=
// %=
// **=


// Descripción
// x = 3
// x += y
// x -= y
// x *= y
// x /= y
// x %= y
// x **= y


// Equivale a
// x = 3
// x = x + y
// x = x - y
// x = x * y
// x = x / y
// x = x % y
// x = x ** y


/**
 * Estructuras de control 

    if      condicion simple
    if/else     condic alternativa
    ?:          operador ternario. quivalente a if/else, metodo abreviado
    switch      estructura para casos especuficos. similar a varios if/else anidados

 */


    /**
     * Estructuras de control | Operador ternario

     * El operador ternario es una alternativa de condicional if/else con una sintaxis más corta y, en muchos casos, más legible. Los dos scripts siguientes hacen lo mismo. El primero usa if/else, el segundo el operador ternario:

    if (nota < 5) {
  calificacion = "suspendido";
} else {
  calificacion = "aprobado";
}
console.log("Estoy", calificacion)


// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Estoy", calificacion);



     */