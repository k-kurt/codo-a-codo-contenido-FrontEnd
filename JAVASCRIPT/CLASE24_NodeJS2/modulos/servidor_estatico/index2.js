//importamos nuestro modulo http
const http=require('http')

const fs=require('fs')//este modulo nos permite trabajar con archivos

const server=http.createServer(
    (req, res)=>{
        res.writeHead(200,{'content-Type': 'text/html; charset=UTF-8'})
        res.end('<h1>hola mundo!</h1><p>parrafo</>')
    }
)


//para levantar el servidor necesitamos el escuchador
server.listen(3000, ()=> console.log('Servidor corriendo en puerto http://localhost:3000'));


