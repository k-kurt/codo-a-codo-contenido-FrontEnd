//aca vamos a levantar el sevidor
//Carga las rutas de autenticación desde un archivo externo.
//Permite recibir y enviar datos en formato JSON.
//Escucha en un puerto específico (3000 por defecto o el que defina la variable de entorno PORT).

const express = require('express')
const authRoutes=require('./routes/authRoutes')//llamamos a las rutas para poder utilizarlas
//Importa el archivo de rutas de autenticación authRoutes. Este archivo debe estar en la carpeta routes y contener todas las rutas relacionadas con autenticación, como login, registro, etc.

const app=express()//Crea una instancia de la aplicación Express, llamada app. Esta instancia se usa para configurar el servidor, definir rutas y middlewares.
const PORT=process.env.PORT || 3000//Define el puerto en el que el servidor escuchará. Si existe una variable de entorno PORT configurada (por ejemplo, en una plataforma de despliegue como Heroku), se usará ese valor. Si no, el servidor se levantará en el puerto 3000 por defecto.

app.use(express.json())//Configura un middleware que permite al servidor manejar peticiones JSON. Esto es útil para APIs, donde los datos se envían y reciben en formato JSON

app.use('/auth', authRoutes)//ruta predertiminada
//Define un middleware para manejar todas las rutas relacionadas con autenticación. Aquí, cualquier ruta que comience con /auth será manejada por las rutas definidas en authRoutes. Por ejemplo, una ruta en authRoutes llamada /login estará disponible como /auth/login en la aplicación.

app.listen(PORT, ()=>{
    console.log(`corriendo en puerto ${PORT}`)
})