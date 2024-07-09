/*
Tenemos que ubicarnos en la carpeta donde est el js y ahi instalar tood, luego:
En la terminal corremos el comando:
para crear la carpeta json, para incializar el proyecto
npm init -y
Instalamos Express mediante npm:
npm install express --save
El flag --save indica que debe registrar la dependencia y sus subdependencias actualizadas.
A continuación, vemos en el package.json que contamos con una lista de dependencias con express en la versión que acaba de instalar
 */

//llamamos a express
const express=require('express')
//vamos a crear una variable donde esten englobadas todas las funciones de express, llama a los metodos de express
const app=express()
//tenemos que declarar el puerto donde vamos a correr la aplicacion
const port=3000

//vamos a empezar a usar los estados
//el primer parametro que le vamos a pasar sera la ruta donde queremos levantar este servidor, podemos darle varias rutas y cada ruta puede tener una accion distinta, en este caso la ruta incio pero puede ser la que nosotros querramos
app.get("/inicio", (req, res)=>{
    res.send("Hello word");//la respuesta a esa ruta va ser hello word
})


//llamamos al servidor
app.listen(port, ()=>{
    console.log(`corriendo en http://localhost:${port}`);
})

/* 
EN EL PACKAGE.JSON AGREGAMOS EL "start": "node.js" en la parte de scripts 
Si queremos que la pagina se vaya actualizando a medida que se vaya codeando se usa Nodemon, como el liveserver funciona, no todas las pc lo soportan, una forma es parecida a lo que hicimos antes pero agregando el flag "--watch"
"scripts" : {
"start": "node --watch app.js"
}
esa es una forma de que lo ejecute javascript
La otra forma es instalar la dependencia y hacer lo mismo
se instala con "npm install -D nodemon"
y se hace lo mismo que antes 
"scripts": {
"start": "nodemon app.js"
}
*/
