


//PETICIONES FETCH

/*
El Fetch API es una tecnologia moderna que permite realizar solicitudes HTTP de manera asincronica desde el navegador. es parte del estandar de HTML5 y proporciona una manera poderosa y flexible de interactuar con seervidores web. A diferencia de XMLHttpRequest, que era la forma anterior de reallizar solicitudes, fetch ofrece una forma mas sencilla y potente de trabajar con promesas, facilitando la escritura de codigo asincrono que es mas facil de leer y mantener.

Fetch API es una herramienta esencial para los desarrolladores web modernos, proporcionando una interfaz limpia y facil de usar para realiar solicituddes HTTP. A lo largo de esta clase, aprenderemos a utilizar fetch en diferentes escenarios, manejar respuestas de diversos tipos, y gestionar errores de manera efectiva. 
 */



// let texto1="PETICIONES APIS RESTFUL: METODO GET"
// let titulo1=document.createElement("h2");
// titulo1.textContent=texto1;
// document.body.appendChild(titulo1);


document.body.appendChild(document.createElement('h2')).textContent="PETICIONES APIS RESTFUL: METODO GET"


/* 
PETICIONES APIS RESTFUL; METODO GET

El metodo GET se utiliza para recuperar informacion del servidor. no modifica los datos en el servidor; solo solicita y reibe datos

Se define un options que especifica el metodo HTTP a utilizar(GET) y los encabezados de la solicitud. en este caso, el encabexado 'accept' se establece en application/json, lo que indica el cliente(nuestro codigo) espera que la respuesta este en formato JSON.*/



//CONSUMO DE API de rick and morty
const options={
    method:'GET',
    headers:{
        accept: 'application/json'
    }
}

fetch('https://rickandmortyapi.com/api/character', options)
.then(response=>response.json())
// .then(response=>console.log(response))
.then(response=>{
    response.results.forEach((personaje)=>{
    console.log(personaje.name, personaje.image, personaje.species);
})})

//es lo mismo que arriba, solo que lo de arriba trae todo el objeto completo y aca mostramos las propiedades del objeto
//la palabra perosnajes la elegimos nosotros
.catch(err=>console.error(err)); 


//LO MISMO PERO EN UNA FUNCION
/* const perdirDatos=()=>{
fetch('https://rickandmortyapi.com/api/character', options)
.then(response=>response.json())
// .then(response=>console.log(response))
.then(response=>{
    response.results.forEach((personaje)=>{
    console.log(personaje.name, personaje.image, personaje.species);
})})

//es lo mismo que arriba, solo que lo de arriba trae todo el objeto completo y aca mostramos las propiedades del objeto
//la palabra perosnajes la elegimos nosotros
.catch(err=>console.error(err)); 
}

perdirDatos(); */





//CONSUMO DE API Y MOSTRARLO EN EL HTML

let container=document.getElementById('personajes')

const pedirDatos=()=>{

    fetch('https://rickandmortyapi.com/api/character', options)
    .then(response=>response.json())
    // .then(response=>console.log(response))
    .then(response=>{
        response.results.forEach((personaje)=>{
            // console.log(personaje.name, personaje.image, personaje.species);
            const articule=document.createElement('articule');
            articule.setAttribute('class', 'character');
            articule.innerHTML=`
            <img src="${personaje.image}" alt="${personaje.name}">
            <h2>${personaje.name}</h2>
            <div>
            <p>${personaje.species}</p>
            </div>`;
            container.appendChild(articule);
        })})
        
        .catch(err=>console.error(err)); 
    }


pedirDatos();


// let titulo=document.querySelector('h1');
// let header=document.querySelector('header');
// titulo.innerHTML=`<h2>holaaaaaaaa</h2>`;
// header.appendChild(titulo)
