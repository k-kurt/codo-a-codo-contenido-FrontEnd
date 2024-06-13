/* CLASE DE SINCRONISMO 
En js el sincronismo se refiere a la ejecucion secuencial de codigo, donde cada linea de codigo espera a que se la linea anterior se haya completado antes de ejecutarse
El bloqueo:
el modelo sincronico puede conducir a problemas de bloqueo de la interfaz de usuario, especialmente en aplicaciones web donde una tarea larga puede hacer que la pagina no responda
La previsibilidad:
el codigo sincronico es generalmente mas facil de leer, escribir y depurar debido a su naturaleza secuencial y predecible

*/


//EJEMPLO DE SINCRONISMO

console.log('primero: este mensaje se muestra primero');


//podemos declarar la funcion afuera, la de abajo es una funcion anonima
let mensaje2=function(){
    console.log('cuarto: este mensaje se muestra despues de 3 segundos.')
}
setTimeout(mensaje2,3000)

//el settimeOut siempre espera una funcion y el tiempo a esperar
setTimeout(() => {
    console.log('tercero: Este mensaje se muestra despues de 2 segundos.')
}, 2000);



console.log('segundo: este mensaje se muestra mientras esperamos el temporazidor')