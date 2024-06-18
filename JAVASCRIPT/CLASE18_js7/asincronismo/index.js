/* CLASE DE SINCRONISMO 
En js el sincronismo se refiere a la ejecucion secuencial de codigo, donde cada linea de codigo espera a que se la linea anterior se haya completado antes de ejecutarse
El bloqueo:
el modelo sincronico puede conducir a problemas de bloqueo de la interfaz de usuario, especialmente en aplicaciones web donde una tarea larga puede hacer que la pagina no responda
La previsibilidad:
el codigo sincronico es generalmente mas facil de leer, escribir y depurar debido a su naturaleza secuencial y predecible

*/


//EJEMPLO DE ASINCRONIco
//Javascript puede manejar operaciones que no se completan inmediatamente
/* 
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
 */
 


let listaContainer=document.createElement('ul')
let li1=document.createElement('li')
let li2=document.createElement('li')



//asincronico
let texto1='ASINCRONICO'
let contenido2=document.createElement('h2')
contenido2.textContent=texto1
//document.body.appendChild(contenido2)



//promesas
let texto="PROMESAS"
let contenido1=document.createElement('h2')
contenido1.textContent=texto
//document.body.appendChild(contenido1)

document.body.appendChild(listaContainer)
li1.appendChild(contenido1)
li2.appendChild(contenido2)
listaContainer.appendChild(li1)
listaContainer.appendChild(li2) 






//PROMESAS

/* Son un mecanismo para manejar operaciones asincronas. permiten manejsar el eventual resultado de una operacion asincronica, ya sea un exito o un fallo. Como el try catch en Java

las promesas representan un valor que puede no estar disponible aun, pero que evenutalmente se resolvera o rechazara, permitiendo que el codigo continue ejecutandose en paraleleo sin bloquear la ejecucion principal
Sirve para:
solicitudes de red(pj: AJAX/Fetch)
lecturas de arcjivos en aplicaciones basdas en NodeJs
operaciones de base de datos
operaciones que requieran esperar por un evento o respuesta antes de continuar*/


//COMO CREAR UNA PROMESA:

/* const promesa=new Promise((resolve, reject)=> {
    //simulamos un valor para que la condicion se cumpla(o no)
    const x=44;
    //operacion asincornica simulada
    setTimeout(() => {
        if(x===42){
            resolve("Exito!")//la promsesa se resuleve exitosamente
        }else{
            reject("fallo!")//la promesa falla y se rechaza
        }
    }, 2000);
})


//el then es un metodo utilizado en las promesas que capta las 2 opciones
promesa.then(
    (resultado)=>{
        console.log(resultado);
    },
    (error)=>{
        console.error(error);
    }
    
).finally(console.log("operacion finalizada"));

 */



//este es el mismo codigo que el de arriba para mostrar el resultado, pero con mas pasos para poder entender mejor

//definir la funcion para manejsar el resultado
// function manejarResultado(resultado){
//     console.log(resultado);//se ejecuta si la promesa se resuelve
// }

// //definir la funcion para manejsar el error
// function manejarError(error){
//     console.error(error); //se ejecuta si la promesa se rechaza 
// }

// //Usar then y catch para manejsar la resolucion y el rechazo de la promesa
// promesa
// .then(manejarResultado)
// .catch(manejarError);




//OTRA FORMA DE HACERLO
//  function ejemploPromesa(){

//     return new Promise((resolve, reject)=> {
//         //simulamos un valor para que la condicion se cumpla(o no)
//     const x=44;
// //operacion asincornica simulada
// setTimeout(() => {
//     if(x===42){
//         resolve("Exito!")//la promsesa se resuleve exitosamente
//     }else{
//         reject("fallo!")//la promesa falla y se rechaza
//     }
// }, 2000);
// })
// }


// ejemploPromesa()
// .then((resultado)=>{
//     console.log(resultado);
// })
// .catch((error)=>{
//     console.error(error);
// })
// .finally(()=>{
//     console.log("operacion finalizada")
// })



//OTRO EJEMPLO
// function obtenerDatosDeAPI(){
//     return new Promise((resolve, reject)=>{
//         //simulamos una llamada a la API con setTimeout
//         setTimeout(() => {
//             //supongamos que esta es una operacion que puede fallar aleatoriamente
//             const fallo=Math.random()>0.5;//50% de provalidad de fallo
//             if(fallo){
//                 reject("Error: No se puedo obtener los datos.")
//             }else{
//                 resolve("datos obtenidos exitosamente.")
//             }

//         }, 1000);
//     }

//     )
// }


// obtenerDatosDeAPI()
// .then(respuesta=>{
//     //se ejecuta si la promesa se resuelve exitosamente 
//     console.log(respuesta)
// })
// .catch(error=>{
//     //se eejecuta si la promesa se rechaza 
//     console.log(error);
// })
// .finally(()=>{
//     //se ejecuta independientemente del resultado anterior
//     console.log("Operacion completada");
// });










//CALLBACK HELL
/* Este codigo ilustra un collbackHell por que las funciones de callback estan anidadas dentro de otras funciones callback; creando un codigo que se desplaza a la fertecvha y dificil de leer y mantener. Esta estructura puede llevar a errores y difilcutades al intentar rastrear el flujo de ejecucuon del programa, especialmente en aplicaciones mas complejas donde las operaciones asincronas son comunes. */



/* 
console.log("inicio del proceso");

setTimeout(() => {
    console.log("primera tarea completada");
    setTimeout(() => {
        console.log("segundo proceso terminado")
        setTimeout(() => {
            console.log("tercer proceso terminado")
            console.log("todos los procesos terminados")
        }, 1000);//tercera tarda 1 segundo
    }, 1000);//segunda tarea tarda 1 segundo
}, 1000);//primera tarea tarda 1 segundo */








//ASYNC / AWAIT
/* async y await son extensiones de las promesas en javascript que simplifican la forma de trabajar con operaciones asincronas. Estos hacen que el codigo asincrona sea mas facil de escribir y entender ls complejidades habituales asiciadas con el manejo de promesas.

La funcion async 
la palabra clave async se utiliza para declarar una funcion como asincrnona. Declara que una funcion puede, en algun momento esperar a que las promesas se resuelvan sin bloquear la ejecucion de otras operaciones, Aqui estan los detalles clase:

Devolucion de una promesa: una funcion async automaticamente devuelve una promesa . si la funcion retorna algo que no es promesa, ese valor sera automaticamente envuelvo en una promesa

Sintaxis: pUede ser usada con declaraciones de funciones normales, funciones flecha,  y metodos de clase.*/


/* En el siguiente ejemplo, declaramos una funcion asincronica, por lo tanto devolvera automaticamente  una promesa, esto nos permite utilizar los metodos aplicados a las promesas cuando sea invocada a funcion
*/


async function obtenerDatos(){
    return "datos recibidos";
}

//la funcion devuelve una promesa
obtenerDatos().then(console.log);//imprime "datos recibidos"


/* Pero todavia, al no utilizar el await dentro de la funcion, no tenemos un asincronismo real en el codigo. */




//AWAIT
//la palabra clave await
/* await solo puede ser usado dentro defunciones async y es usado para pausar la ejecucion de la funcion hasta que la promesa a ala que se llama se resuelva o rechace. El uso de await ayuda a que el codigo asincrono se lea de manera mas intuitiva, casi como si fuera sincronico */
/* 

async function procesarDatos(){
    try {
        //espera aqui hasta que fetch complete
        const datos=await fetch('https://api.example.com/datos');
        //Espera aqui jasta que la conversion a JSON complete
        const json=await datos.json();
        console.log(json);
    } catch (error) {
        console.error("error al obtener datos: ", error)
    }
}
 */







//CONSUMIENDO UNA API
async function procesarDatos(){
    try {
        const datos=await fetch('https://hp-api.onrender.com/api/characters');
        const json=await datos.json();

        //forma mas corta de hacerlo
        //const daos2=await fetch('https://hp-api.onrender.com/api/characters').then(res=>res.json())


        let propiedad=json[0];
        console.log(propiedad.actor)
        console.log(json[0])
        console.log(json)
    } catch (error) {
        console.error("Error al obtener datos: ",error)
    }
}


procesarDatos();