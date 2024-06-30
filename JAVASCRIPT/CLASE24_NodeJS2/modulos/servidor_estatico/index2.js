//importamos nuestro modulo http
const http=require('http')

const fs=require('fs')//este modulo nos permite trabajar con archivos

const server=http.createServer(
    (req, res)=>{

        const file = fs.readFileSync(__dirname + '/../index2.html')//el readFileSync permite leer archivos sincrnicamente, hasta que notermine no continua

        res.writeHead(200,{'content-Type': 'text/html; charset=UTF-8'})
        res.end(file)//le pasamos la variable file
    }
)


//para levantar el servidor necesitamos el escuchador
server.listen(3000, ()=> console.log('Servidor corriendo en puerto http://localhost:3000'));


