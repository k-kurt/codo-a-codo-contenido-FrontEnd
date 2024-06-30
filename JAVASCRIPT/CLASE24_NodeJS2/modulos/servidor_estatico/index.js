//importamos nuestro modulo http
const http=require('http')

//necesitamos crear una variable donde levantamos ese servidor
const server=http.createServer(
    (req, res)=>{//el requiare se trata de un pedido al servidor,en este caso no esperamos un req pero si una respuesta 
        // res.writeHead(200,{'content-Type': 'text/plain'})//el contenido que va a recibir sera texto plano

        // res.end('hola mundo')//la respuesta final sera el hola mundo
        //basicamente mostrara una pantalla engra con el mensaje hola mundo

        //intentamos con un elemento html
        res.writeHead(200,{'content-Type': 'text/html; charset=UTF-8'})
        res.end('<h1>hola mundo!</h1><p>parrafo</>')
    }
)


//para levantar el servidor necesitamos el escuchador
server.listen(3000, ()=> console.log('Servidor corriendo en puerto http://localhost:3000'));//pasamos el puerto donde corre y una arraow function


