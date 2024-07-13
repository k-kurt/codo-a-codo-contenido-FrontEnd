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

//importar el filesystem, para hacer lo de  consumir un json
const fs=require('fs')

//Esto es para utilizar la carpeta public donde siempre se utiliza el index.html coo pagina inicial 
app.use(express.static('public'))//hay que crear esa carpeta donde esta el app.js


//vamos a empezar a usar los estados
//el primer parametro que le vamos a pasar sera la ruta donde queremos levantar este servidor, podemos darle varias rutas y cada ruta puede tener una accion distinta, en este caso la ruta incio pero puede ser la que nosotros querramos
app.get("/inicio", (req, res)=>{
    res.send("Hello word");//la respuesta a esa ruta va ser hello word
})

//esto lo usamos para acceder al segundo archivo html en la carpeta public, no es la mejor forma para acceder a html de la pagina, haremos otra forma, pero usamos el get para el pedido de datos
app.get('/segundaRuta',(req, res)=>{
    res.sendFile(__dirname+'/public/segundaRuta.html')
})


//vamos a mostrar el json package.json del proyecto en la ruta /item
app.get('/item',(req, res)=>{
    const getItems=fs.readFileSync('package.json')//toma el archivo json

    res.send(JSON.parse(getItems))//enviamos la respuesta con el json parseado
})



//RUTAS PARAMETRIZADAS-params

app.get('/inicio/:id',(req,res)=>{
    const id=req.params.id//ese id del final es por que arriba esta id
    res.send(`su numero de usuario es ${id}`)
    })

app.get('/inicio/:id/nombre/:nombre',(req, res)=>{

    const nombre=req.params.nombre
    res.send(`Su nombre es ${nombre}`)

})




//RUTAS PARAMETRIZADAS-query

/* Otra manera de pedir datos a través de la URL es mediante los querys.
En las rutas parametrizadas en lugar de incluir los parámetros directamente en la ruta de la URL, como en las rutas parametrizadas convencionales, los parámetros de consulta se incluyen como pares clave-valor en la parte de la URL que sigue al signo de interrogación ?
http://localhost:3000/busqueda?palabra=perro&tipo=animal */

app.get('/busqueda',(req,res)=>{
    const nombre=req.query.nombre
    const apellido=req.query.apellido
    const edad=req.query.edad
    if(nombre&&apellido&&edad){
        res.send(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`)
    }else{
        res.send(`Por favor, proporcione un nombre, apellido, o una edad en la query string`)
    }
})


//-----------------------------------------------

//llamamos al servidor
app.listen(port, ()=>{
    console.log(`corriendo en http://localhost:${port}`);
})

/* 
-EN EL PACKAGE.JSON AGREGAMOS EL "start": "node.js" en la parte de scripts, esto es para lanazar el comando npm start 

-Si queremos que la pagina se vaya actualizando a medida que se vaya codeando se usa Nodemon, como el liveserver funciona, no todas las pc lo soportan, una forma es parecida a lo que hicimos antes pero agregando el flag "--watch"
"scripts" : {
"start": "node --watch app.js"
}
esa es una forma de que lo ejecute javascript

-La otra forma es instalar la dependencia y hacer lo mismo
se instala con "npm install -D nodemon"
y se hace lo mismo que antes 
"scripts": {
"start": "nodemon app.js"
}
 
-Esto permite estar actualizando la pagina para ver los cambios, el nodemon va cerrando y abriendo el servidor para que nosotros no tengamos que hacerlo

*/
