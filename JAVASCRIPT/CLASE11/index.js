console.log("hola mundo")
// console.log("hoy es la clase",10+1);

// console.warn("esta pagina tiene advertencia")
// console.error("esta pagina tiene error")
// console.info("esto es importante")


/**
 * las variables en js no son como en java que se pueden guardar en el servidor y se pueden enviar a la bbdd 
 * aqui se guardan por un tiempo mientras dure la pagina, luego se borra y se vuelve a crear 
 */

//variables

// var nombre="kevin";

// var edad=27;

// console.log("mi nombre es: "+nombre+" mi edad es: "+edad);

// var PI=3.14

// var otonio=true

// var verano= false

// var iva = NaN

// iva= 1.21

// nombre="oscar"

// const PI = 3.14

// console.log(PI)

// PI=3.15

// console.log(PI)


// var n1=parseInt(prompt("ingrese un numero"))
// var n2=parseInt(prompt("ingrese otro numero"))

// console.log(n1+n2)


Number.parseInt("11101", 2); // 29 en binario
Number.parseInt("31", 8); // 25 en octal
Number.parseInt("FF", 16); // 255 en hexadecimal

/**
 * Si utilizamos parseInt() con dos parámetros, donde el primero es el texto con el número y el segundo es la base numérica del número, se realiza la conversión de tipo respetando la base elegida:
 * Esta modalidad de parseInt() se utiliza para pasar a base decimal un número que se encuentra en otra base (binario, octal, hexadecimal, etc.) parseFloat() funciona exactamente igual, pero en lugar de operar con números enteros opera con números en coma flotante.
 */


document.write("hola dede javascript")